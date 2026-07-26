import { AnnouncementBoard } from "@/components/AnnouncementBoard";
import { HeroSection } from "@/components/HeroSection";
import { ShortcutCards } from "@/components/ShortcutCards";
import { ModeToggle } from "@/components/ModeToggle";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <ModeToggle />
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center">
        <AnnouncementBoard />
        <HeroSection />
        <ShortcutCards />
      </main>
      <footer className="w-full text-center py-6 text-sm text-slate-500 dark:text-slate-400 mt-auto border-t border-slate-200 dark:border-slate-800">
        © 2026 新生报到指南
      </footer>
    </div>
  );
}
