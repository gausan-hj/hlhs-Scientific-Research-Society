import type { StudioTheme } from 'sanity';

/**
 * Apple + Notion 风格主题（轻量版）
 *
 * 只配置字体，其余视觉效果由 studio.css 覆盖。
 * 不使用 buildTheme() —— 避免运行时颜色令牌解析异常。
 */

export const theme: StudioTheme = {
  fonts: {
    text: {
      family:
        '"Inter", "Noto Sans TC", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      weights: {
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      sizes: [
        { ascenderHeight: 4, fontSize: 12, iconSize: 17, lineHeight: 16, letterSpacing: 0 },
        { ascenderHeight: 5, fontSize: 14, iconSize: 19, lineHeight: 20, letterSpacing: 0 },
        { ascenderHeight: 6, fontSize: 16, iconSize: 21, lineHeight: 24, letterSpacing: 0 },
        { ascenderHeight: 7, fontSize: 20, iconSize: 25, lineHeight: 28, letterSpacing: 0 },
        { ascenderHeight: 8, fontSize: 24, iconSize: 29, lineHeight: 32, letterSpacing: 0 },
      ],
    },
    heading: {
      family:
        '"Inter", "Noto Sans TC", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      weights: {
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      sizes: [
        { ascenderHeight: 4, fontSize: 12, iconSize: 17, lineHeight: 16, letterSpacing: 0 },
        { ascenderHeight: 5, fontSize: 14, iconSize: 19, lineHeight: 20, letterSpacing: 0 },
        { ascenderHeight: 6, fontSize: 16, iconSize: 21, lineHeight: 24, letterSpacing: 0 },
        { ascenderHeight: 7, fontSize: 20, iconSize: 25, lineHeight: 28, letterSpacing: 0 },
        { ascenderHeight: 8, fontSize: 24, iconSize: 29, lineHeight: 32, letterSpacing: 0 },
      ],
    },
    label: {
      family:
        '"Inter", "Noto Sans TC", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      weights: {
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      sizes: [
        { ascenderHeight: 2, fontSize: 10, iconSize: 15, lineHeight: 12, letterSpacing: 0.5 },
        { ascenderHeight: 3, fontSize: 11, iconSize: 16, lineHeight: 14, letterSpacing: 0.25 },
        { ascenderHeight: 4, fontSize: 12, iconSize: 17, lineHeight: 16, letterSpacing: 0 },
        { ascenderHeight: 5, fontSize: 14, iconSize: 19, lineHeight: 20, letterSpacing: 0 },
        { ascenderHeight: 6, fontSize: 16, iconSize: 21, lineHeight: 24, letterSpacing: 0 },
      ],
    },
    code: {
      family:
        '"JetBrains Mono", "SF Mono", "Fira Code", "Cascadia Code", Menlo, Monaco, monospace',
      weights: {
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      sizes: [
        { ascenderHeight: 4, fontSize: 12, iconSize: 17, lineHeight: 20, letterSpacing: 0 },
        { ascenderHeight: 5, fontSize: 14, iconSize: 19, lineHeight: 22, letterSpacing: 0 },
        { ascenderHeight: 6, fontSize: 16, iconSize: 21, lineHeight: 24, letterSpacing: 0 },
        { ascenderHeight: 7, fontSize: 20, iconSize: 25, lineHeight: 28, letterSpacing: 0 },
        { ascenderHeight: 8, fontSize: 24, iconSize: 29, lineHeight: 32, letterSpacing: 0 },
      ],
    },
  },
};
