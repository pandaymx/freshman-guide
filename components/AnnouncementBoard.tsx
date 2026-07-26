"use client";

import { useSyncExternalStore } from "react";
import { AlertCircle, X } from "lucide-react";

interface Announcement {
  id: string;
  message: string;
  type: "info" | "warning" | "error";
}

// Sample JSON driven announcements
const announcementsData: Announcement[] = [
  {
    id: "announce-2026-shuttle",
    message: "关于报到当天接驳车时间的紧急通知：由于交通管制，接驳车频率调整为每30分钟一班，请各位新生合理安排时间。",
    type: "warning",
  },
];

const EMPTY_ANNOUNCEMENTS: Announcement[] = [];

let cachedSnapshot: Announcement[] = EMPTY_ANNOUNCEMENTS;
let cachedKey = "";
const listeners = new Set<() => void>();

function getVisibleAnnouncements(): Announcement[] {
  const key = announcementsData
    .map((a) => sessionStorage.getItem(`dismissed-${a.id}`) ?? "")
    .join("|");
  if (key !== cachedKey) {
    cachedKey = key;
    cachedSnapshot = announcementsData.filter(
      (a) => sessionStorage.getItem(`dismissed-${a.id}`) !== "true"
    );
  }
  return cachedSnapshot;
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function dismissAnnouncement(id: string) {
  sessionStorage.setItem(`dismissed-${id}`, "true");
  listeners.forEach((listener) => listener());
}

export function AnnouncementBoard() {
  const visibleAnnouncements = useSyncExternalStore(
    subscribe,
    getVisibleAnnouncements,
    () => EMPTY_ANNOUNCEMENTS
  );

  const handleDismiss = (id: string) => {
    dismissAnnouncement(id);
  };

  if (visibleAnnouncements.length === 0) {
    return null;
  }

  return (
    <div className="w-full space-y-2 mb-8">
      {visibleAnnouncements.map((announcement) => (
        <div
          key={announcement.id}
          className="relative flex items-start sm:items-center gap-3 bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 p-4 rounded-r-lg shadow-sm"
        >
          <AlertCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5 sm:mt-0" />
          <p className="text-sm text-amber-800 dark:text-amber-200 flex-1 pr-8">
            {announcement.message}
          </p>
          <button
            onClick={() => handleDismiss(announcement.id)}
            className="absolute right-2 top-2 sm:top-1/2 sm:-translate-y-1/2 p-1.5 rounded-md text-amber-500 hover:bg-amber-100 dark:hover:bg-amber-900/50 transition-colors"
            aria-label="Dismiss announcement"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      ))}
    </div>
  );
}
