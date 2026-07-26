import { CampusTabs } from "@/components/transit/CampusTabs";
import { transitData } from "@/lib/data/transitData";
import { ModeToggle } from "@/components/ModeToggle";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export const metadata = {
  title: "接站交通指引 - 新生报到指南",
  description: "各校区迎新接站专线及公共交通指引",
};

export default function TransitPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <ModeToggle />

      {/* Header */}
      <header className="w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center gap-4">
          <Link
            href="/"
            className="p-2 -ml-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
            迎新接站大巴路线及站点安排
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-5xl mx-auto flex flex-col">
        <CampusTabs campuses={transitData} />
      </main>

      {/* Footer */}
      <footer className="w-full text-center py-6 text-sm text-slate-500 dark:text-slate-400 mt-auto border-t border-slate-200 dark:border-slate-800">
        © 2026 新生报到指南
      </footer>
    </div>
  );
}
