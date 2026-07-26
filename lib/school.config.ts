/**
 * 学校品牌配置
 * 通过修改这里的选项，即可在「纯 SVG（图标已含校名）」与「SVG 图标 + 文字」两种展示方式之间切换，
 * 而无需改动组件代码。
 */
export interface SchoolConfig {
  /** 校名（split 模式下作为文字展示） */
  name: string;
  /**
   * 展示方式：
   * - "combined"：使用含文字的 SVG（纯 svg 方式）
   * - "split"   ：使用图标 SVG + 文字（svg + 文本方式）
   */
  variant: "combined" | "split";
  /** 含校名的 SVG 路径（combined 模式使用） */
  combinedSrc: string;
  /** 仅图标的 SVG 路径（split 模式使用） */
  iconSrc: string;
}

export const schoolConfig: SchoolConfig = {
  name: "清华大学",
  variant: "combined", // 改为 "split" 即可切换为「图标 + 文字」方式
  combinedSrc: "/school.svg",
  iconSrc: "/school-icon.svg",
};
