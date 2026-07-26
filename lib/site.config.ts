/**
 * 站点级配置
 * 主要解决 GitHub Pages 项目站点部署在子路径（如 /freshman-guide）时的资源 404 问题。
 */

/** 部署子路径，由构建时的 NEXT_PUBLIC_BASE_PATH 注入（GitHub Pages 通常为 /<仓库名>） */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/**
 * 为资源路径拼接 basePath。
 * - 本地（basePath 为空）：withBase("/school.svg") => "/school.svg"
 * - 部署（basePath="/freshman-guide"）：withBase("/school.svg") => "/freshman-guide/school.svg"
 */
export function withBase(path: string): string {
  if (!basePath) return path;
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${clean}`;
}
