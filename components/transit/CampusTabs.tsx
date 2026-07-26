"use client";

import { CampusTransitInfo } from "@/types/transit";
import { useState } from "react";
import { TransitCard } from "./TransitCard";
import { ReceptionNotice } from "./ReceptionNotice";

interface CampusTabsProps {
  campuses: CampusTransitInfo[];
}

export function CampusTabs({ campuses }: CampusTabsProps) {
  const [activeCampusId, setActiveCampusId] = useState<string>(
    campuses.length > 0 ? campuses[0].campusId : ""
  );

  const activeCampus = campuses.find((c) => c.campusId === activeCampusId);

  return (
    <div className="w-full">
      {/* Sticky Tabs Header */}
      <div className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 pb-0">
        <div className="flex overflow-x-auto hide-scrollbar gap-6 px-4 pt-4 sm:px-6">
          {campuses.map((campus) => {
            const isActive = campus.campusId === activeCampusId;
            return (
              <button
                key={campus.campusId}
                onClick={() => setActiveCampusId(campus.campusId)}
                className={`whitespace-nowrap pb-3 text-lg font-medium border-b-2 transition-colors ${
                  isActive
                    ? "border-blue-600 text-blue-600 dark:border-indigo-500 dark:text-indigo-400"
                    : "border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"
                }`}
              >
                {campus.campusName}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Campus Content */}
      {activeCampus && (
        <div className="px-4 sm:px-6 py-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <ReceptionNotice notice={activeCampus.notice} />

          <div className="mt-8 space-y-6">
            {activeCampus.transitRules.map((rule) => (
              <TransitCard key={rule.id} rule={rule} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
