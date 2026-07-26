import Link from 'next/link';

export const mdxComponents = {
  h1: (props: any) => <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />,
  h2: (props: any) => <h2 className="text-2xl font-semibold mt-6 mb-3" {...props} />,
  h3: (props: any) => <h3 className="text-xl font-semibold mt-5 mb-2" {...props} />,
  p: (props: any) => <p className="leading-7 [&:not(:first-child)]:mt-6" {...props} />,
  a: ({ href, ...props }: any) => {
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
  ul: (props: any) => <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props} />,
  ol: (props: any) => <ol className="my-6 ml-6 list-decimal [&>li]:mt-2" {...props} />,
  li: (props: any) => <li className="mt-2" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="mt-6 border-l-2 border-slate-300 pl-6 italic text-slate-800" {...props} />
  ),
  table: (props: any) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className="w-full text-left" {...props} />
    </div>
  ),
  th: (props: any) => (
    <th className="border-b border-slate-200 p-4 pt-0 text-sm font-semibold text-slate-800 text-left" {...props} />
  ),
  td: (props: any) => <td className="border-b border-slate-100 p-4 text-sm text-slate-600" {...props} />,
  pre: (props: any) => (
    <pre className="mb-4 mt-6 overflow-x-auto rounded-lg border bg-slate-900 py-4 px-4 font-mono text-sm text-slate-50" {...props} />
  ),
  code: (props: any) => <code className="relative rounded bg-slate-100 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-slate-900" {...props} />,
};
