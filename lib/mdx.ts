import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import { visit } from 'unist-util-visit';
import GithubSlugger from 'github-slugger';
import { toString } from 'mdast-util-to-string';
import type { Node } from 'unist';
import type { Heading } from 'mdast';

const GUIDES_DIR = path.join(process.cwd(), 'content/guides');

export interface GuideMeta {
  slug: string;
  title: string;
  date: string;
  category?: string;
  order?: number;
  [key: string]: unknown;
}

export interface TocItem {
  value: string;
  url: string;
  depth: number;
}

export interface Guide {
  meta: GuideMeta;
  content: string;
  toc: TocItem[];
}

// Ensure the directory exists
function ensureDir() {
  if (!fs.existsSync(GUIDES_DIR)) {
    fs.mkdirSync(GUIDES_DIR, { recursive: true });
  }
}

export function getGuideSlugs(): string[] {
  ensureDir();
  return fs.readdirSync(GUIDES_DIR)
    .filter((file) => /\.mdx?$/.test(file))
    .map((file) => file.replace(/\.mdx?$/, ''));
}

export async function getGuideBySlug(slug: string): Promise<Guide | null> {
  try {
    const fullPath = path.join(GUIDES_DIR, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const { data, content } = matter(fileContents);
    const meta: GuideMeta = {
      slug,
      title: data.title || slug,
      date: data.date || '',
      category: data.category || '',
      order: typeof data.order === 'number' ? data.order : 9999,
      ...data,
    };

    const toc = await extractToc(content);

    return { meta, content, toc };
  } catch {
    return null;
  }
}

export async function getAllGuidesMeta(): Promise<GuideMeta[]> {
  const slugs = getGuideSlugs();
  const guides: GuideMeta[] = [];

  for (const slug of slugs) {
    const guide = await getGuideBySlug(slug);
    if (guide) {
      guides.push(guide.meta);
    }
  }

  // Sort by order, then date
  return guides.sort((a, b) => {
    if ((a.order ?? 9999) !== (b.order ?? 9999)) {
      return (a.order ?? 9999) - (b.order ?? 9999);
    }
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

async function extractToc(content: string): Promise<TocItem[]> {
  const toc: TocItem[] = [];
  const slugger = new GithubSlugger();

  const processor = remark().use(() => (tree: Node) => {
    visit(tree, 'heading', (node: Heading) => {
      // Only extract h2 and h3 for TOC
      if (node.depth === 2 || node.depth === 3) {
        // Get text content of the heading
        const text = toString(node);

        const id = slugger.slug(text);
        toc.push({
          value: text,
          url: `#${id}`,
          depth: node.depth,
        });
      }
    });
  });

  await processor.process(content);
  return toc;
}

export async function getAdjacentGuides(slug: string) {
  const allGuides = await getAllGuidesMeta();
  const index = allGuides.findIndex((g) => g.slug === slug);

  if (index === -1) {
    return { prev: null, next: null };
  }

  return {
    prev: index > 0 ? allGuides[index - 1] : null,
    next: index < allGuides.length - 1 ? allGuides[index + 1] : null,
  };
}