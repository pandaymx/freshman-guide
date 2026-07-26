import Link from "next/link";
import { BookOpen, CheckSquare, Map, HelpCircle, Bus } from "lucide-react";

interface ShortcutCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

const shortcuts: ShortcutCardProps[] = [
  {
    title: "新手必看",
    description: "了解报到流程与注意事项",
    icon: <BookOpen className="h-8 w-8" />,
    href: "/guide",
  },
  {
    title: "接站指引",
    description: "迎新接站大巴路线及站点安排",
    icon: <Bus className="h-8 w-8" />,
    href: "/transit",
  },
  {
    title: "物品清单",
    description: "生活及学习用品准备指南",
    icon: <CheckSquare className="h-8 w-8" />,
    href: "/checklist",
  },
  {
    title: "校园地图",
    description: "宿舍、食堂、教学楼一览",
    icon: <Map className="h-8 w-8" />,
    href: "/map",
  },
  {
    title: "常见 FAQ",
    description: "解答你对大学生活的疑惑",
    icon: <HelpCircle className="h-8 w-8" />,
    href: "/faq",
  },
];

export function ShortcutCards() {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold mb-6 text-slate-800 dark:text-slate-100">快捷入口</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {shortcuts.map((shortcut) => (
          <Link
            key={shortcut.title}
            href={shortcut.href}
            className="group flex flex-col items-start p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm hover:shadow-md transition-all hover:border-blue-500 dark:hover:border-indigo-500"
          >
            <div className="p-3 bg-blue-50 dark:bg-indigo-900/50 text-blue-600 dark:text-indigo-400 rounded-lg mb-4 group-hover:scale-110 group-hover:bg-blue-100 dark:group-hover:bg-indigo-900 transition-all">
              {shortcut.icon}
            </div>
            <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-indigo-400 transition-colors">
              {shortcut.title}
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {shortcut.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
