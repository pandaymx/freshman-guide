import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { getGuideBySlug, getGuideSlugs, getAdjacentGuides } from '@/lib/mdx';
import { mdxComponents } from '@/components/mdx/MdxComponents';

import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';

export async function generateStaticParams() {
  const slugs = getGuideSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function GuidePage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const guide = await getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  const { meta, content, toc } = guide;
  const { prev, next } = await getAdjacentGuides(slug);

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-gray-500">
        <Link href="/" className="hover:text-gray-900">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/guides" className="hover:text-gray-900">Guides</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 font-medium">{meta.title}</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Main Content */}
        <main className="flex-1 min-w-0 max-w-4xl">
          <header className="mb-10">
            <h1 className="text-4xl font-extrabold tracking-tight mb-4">{meta.title}</h1>
            <div className="text-gray-500">
              {meta.date && <time dateTime={meta.date}>Updated on {new Date(meta.date).toLocaleDateString()}</time>}
            </div>
          </header>

          <article className="prose prose-slate max-w-none dark:prose-invert">
            <MDXRemote
              source={content}
              components={mdxComponents}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [
                    rehypeSlug,
                    [
                      rehypeAutolinkHeadings,
                      {
                        behavior: 'wrap',
                        properties: {
                          className: ['subheading-anchor'],
                          ariaLabel: 'Link to section',
                        },
                      },
                    ],
                    [
                      rehypePrettyCode,
                      {
                        theme: 'one-dark-pro',
                      },
                    ],
                  ],
                },
              }}
            />
          </article>

          {/* Prev/Next Navigation */}
          <nav className="mt-12 pt-8 border-t border-gray-200 flex justify-between">
            {prev ? (
              <Link href={`/guide/${prev.slug}`} className="flex flex-col items-start group">
                <span className="text-sm text-gray-500 mb-1">Previous</span>
                <span className="font-medium text-blue-600 group-hover:underline">← {prev.title}</span>
              </Link>
            ) : (
              <div />
            )}
            {next && (
              <Link href={`/guide/${next.slug}`} className="flex flex-col items-end group">
                <span className="text-sm text-gray-500 mb-1">Next</span>
                <span className="font-medium text-blue-600 group-hover:underline">{next.title} →</span>
              </Link>
            )}
          </nav>
        </main>

        {/* Sidebar TOC */}
        <aside className="hidden lg:block w-64 flex-shrink-0 relative">
          <div className="sticky top-8">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">On this page</h4>
            {toc.length > 0 ? (
              <ul className="space-y-3 text-sm">
                {toc.map((item, index) => (
                  <li key={index} style={{ paddingLeft: `${(item.depth - 2) * 1}rem` }}>
                    <a href={item.url} className="text-gray-600 hover:text-gray-900 hover:underline block truncate">
                      {item.value}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-400">No headings in this article.</p>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
