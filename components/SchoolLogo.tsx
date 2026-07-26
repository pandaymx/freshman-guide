import * as React from "react";
import { schoolConfig } from "@/lib/school.config";

type ResolvedVariant = "combined" | "split";

interface SchoolLogoProps {
  /** 覆盖配置文件中的展示方式；不传则使用 schoolConfig.variant */
  variant?: ResolvedVariant;
  /** 覆盖校名 */
  name?: string;
  /** 覆盖图标 SVG 路径 */
  iconSrc?: string;
  /** 覆盖含文字的 SVG 路径 */
  combinedSrc?: string;
  /** 外层容器类名 */
  className?: string;
  /** 仅图标尺寸类名（split 模式） */
  iconClassName?: string;
}

/**
 * 学校 Logo 组件，支持两种展示方式：
 * 1. combined：纯 SVG（图标已内含校名）
 * 2. split   ：SVG 图标 + 文字
 * 具体使用哪种由 lib/school.config.ts 的 variant 字段决定，也可通过 props 临时覆盖。
 */
export function SchoolLogo({
  variant = schoolConfig.variant,
  name = schoolConfig.name,
  iconSrc = schoolConfig.iconSrc,
  combinedSrc = schoolConfig.combinedSrc,
  className = "",
  iconClassName,
}: SchoolLogoProps) {
  if (variant === "combined") {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={combinedSrc}
        alt={name}
        className={`h-8 w-auto sm:h-9 ${className}`}
      />
    );
  }

  return (
    <span className={`flex items-center gap-2 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={iconSrc}
        alt=""
        aria-hidden="true"
        className={iconClassName ?? "h-8 w-8 sm:h-9 sm:w-9"}
      />
      <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white sm:text-xl">
        {name}
      </span>
    </span>
  );
}
