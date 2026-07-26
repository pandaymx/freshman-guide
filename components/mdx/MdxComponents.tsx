import Link from 'next/link';

export const mdxComponents = {
  h1: (props: React.ComponentPropsWithoutRef<'h1'>) => <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />,
  h2: (props: React.ComponentPropsWithoutRef<'h2'>) => <h2 className="text-2xl font-semibold mt-6 mb-3" {...props} />,
  h3: (props: React.ComponentPropsWithoutRef<'h3'>) => <h3 className="text-xl font-semibold mt-5 mb-2" {...props} />,
  p: (props: React.ComponentPropsWithoutRef<'p'>) => <p className="leading-7 [&:not(:first-child)]:mt-6" {...props} />,
  a: ({ href, ...props }: React.ComponentPropsWithoutRef<'a'>) => {
    const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

    if (isInternalLink) {
      return (
        <Link href={href} className="font-medium text-blue-600 hover:underline" {...props} />
      );
    }

    return (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={href}
        className="font-medium text-blue-600 hover:underline"
        {...props}
      />
    );
  },
  ul: (props: React.ComponentPropsWithoutRef<'ul'>) => <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props} />,
  ol: (props: React.ComponentPropsWithoutRef<'ol'>) => <ol className="my-6 ml-6 list-decimal [&>li]:mt-2" {...props} />,
  li: (props: React.ComponentPropsWithoutRef<'li'>) => <li className="mt-2" {...props} />,
  blockquote: (props: React.ComponentPropsWithoutRef<'blockquote'>) => (
    <blockquote className="mt-6 border-l-2 border-slate-300 pl-6 italic text-slate-800" {...props} />
  ),
  table: (props: React.ComponentPropsWithoutRef<'table'>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className="w-full text-left" {...props} />
    </div>
  ),
  th: (props: React.ComponentPropsWithoutRef<'th'>) => (
    <th className="border-b border-slate-200 p-4 pt-0 text-sm font-semibold text-slate-800 text-left" {...props} />
  ),
  td: (props: React.ComponentPropsWithoutRef<'td'>) => <td className="border-b border-slate-100 p-4 text-sm text-slate-600" {...props} />,
  pre: (props: React.ComponentPropsWithoutRef<'pre'>) => (
    <pre className="mb-4 mt-6 overflow-x-auto rounded-lg border bg-slate-900 py-4 px-4 font-mono text-sm text-slate-50" {...props} />
  ),
  code: (props: React.ComponentPropsWithoutRef<'code'>) => <code className="relative rounded bg-slate-100 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-slate-900" {...props} />,
};
