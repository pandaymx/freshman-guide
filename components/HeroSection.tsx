"use client";

import { useEffect, useState } from "react";

const TARGET_DATE = new Date("2026-09-01T08:00:00").getTime();

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
}

export function HeroSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = TARGET_DATE - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0 });
      }
    };

    calculateTimeLeft(); // Initial calculation
    const timer = setInterval(calculateTimeLeft, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-blue-600 dark:bg-indigo-900 rounded-2xl p-8 sm:p-12 text-center text-white shadow-lg relative overflow-hidden mb-12">
      {/* Decorative background elements */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500 dark:bg-indigo-800 rounded-full blur-3xl opacity-50" />
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-700 dark:bg-indigo-950 rounded-full blur-3xl opacity-50" />

      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          欢迎来到大学生活！你的入学第一站
        </h1>

        <p className="text-blue-100 dark:text-indigo-200 mb-8 text-lg">
          距离2026年新生报到还有：
        </p>

        <div className="flex gap-4 sm:gap-6 justify-center">
          <div className="flex flex-col items-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 sm:p-4 min-w-[70px] sm:min-w-[90px]">
              <span className="text-3xl sm:text-5xl font-bold font-mono">
                {timeLeft !== null ? String(timeLeft.days).padStart(2, "0") : "--"}
              </span>
            </div>
            <span className="text-blue-100 dark:text-indigo-200 mt-2 text-sm sm:text-base font-medium">天</span>
          </div>

          <div className="text-3xl sm:text-5xl font-bold text-white/50 pt-3 sm:pt-4">:</div>

          <div className="flex flex-col items-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 sm:p-4 min-w-[70px] sm:min-w-[90px]">
              <span className="text-3xl sm:text-5xl font-bold font-mono">
                {timeLeft !== null ? String(timeLeft.hours).padStart(2, "0") : "--"}
              </span>
            </div>
            <span className="text-blue-100 dark:text-indigo-200 mt-2 text-sm sm:text-base font-medium">小时</span>
          </div>

          <div className="text-3xl sm:text-5xl font-bold text-white/50 pt-3 sm:pt-4">:</div>

          <div className="flex flex-col items-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 sm:p-4 min-w-[70px] sm:min-w-[90px]">
              <span className="text-3xl sm:text-5xl font-bold font-mono">
                {timeLeft !== null ? String(timeLeft.minutes).padStart(2, "0") : "--"}
              </span>
            </div>
            <span className="text-blue-100 dark:text-indigo-200 mt-2 text-sm sm:text-base font-medium">分钟</span>
          </div>
        </div>
      </div>
    </div>
  );
}
