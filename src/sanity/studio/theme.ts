import { buildTheme, type ThemeConfig } from '@sanity/ui/theme';

/**
 * Apple + Notion 风格主题配置
 *
 * - 大量留白
 * - 圆角 12px
 * - Inter + Noto Sans TC 字体
 * - WCAG AA 对比度（亮/暗模式均 ≥4.5:1）
 */

const baseConfig: ThemeConfig = {
  // ── 圆角：统一 12px ──
  radius: [6, 12, 12],

  // ── 间距：大量留白 ──
  space: [0, 4, 8, 12, 16, 24, 32, 48, 64, 96],

  // ── 字体：Inter + Noto Sans TC ──
  font: {
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

  // ── 调色板：Apple 风格中性灰 + Notion 蓝紫色强调 ──
  palette: {
    black: '#1a1a2e',
    white: '#ffffff',

    gray: {
      50: '#fafafa',
      100: '#f4f4f5',
      200: '#e8e8ec',
      300: '#d4d4d8',
      400: '#a0a0ab',
      500: '#70707b',
      600: '#51515c',
      700: '#3b3b45',
      800: '#282832',
      900: '#18181b',
      950: '#0d0d10',
    },

    blue: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93bbfd',
      400: '#6091f6',
      500: '#3b6aee',
      600: '#2547e0',
      700: '#1e36cd',
      800: '#1e2fa6',
      900: '#1e2c83',
      950: '#172050',
    },

    purple: {
      50: '#f5f3ff',
      100: '#ede9fe',
      200: '#ddd6fe',
      300: '#c4b5fd',
      400: '#a78bfa',
      500: '#8b5cf6',
      600: '#7c3aed',
      700: '#6d28d9',
      800: '#5b21b6',
      900: '#4c1d95',
      950: '#2e1065',
    },

    green: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d',
      950: '#052e16',
    },

    yellow: {
      50: '#fefce8',
      100: '#fef9c3',
      200: '#fef08a',
      300: '#fde047',
      400: '#facc15',
      500: '#eab308',
      600: '#ca8a04',
      700: '#a16207',
      800: '#854d0e',
      900: '#713f12',
      950: '#422006',
    },

    red: {
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      300: '#fca5a5',
      400: '#f87171',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7f1d1d',
      950: '#450a0a',
    },

    cyan: {
      50: '#ecfeff',
      100: '#cffafe',
      200: '#a5f3fc',
      300: '#67e8f9',
      400: '#22d3ee',
      500: '#06b6d4',
      600: '#0891b2',
      700: '#0e7490',
      800: '#155e75',
      900: '#164e63',
      950: '#083344',
    },

    magenta: {
      50: '#fdf4ff',
      100: '#fae8ff',
      200: '#f5d0fe',
      300: '#f0abfc',
      400: '#e879f9',
      500: '#d946ef',
      600: '#c026d3',
      700: '#a21caf',
      800: '#86198f',
      900: '#701a75',
      950: '#4a044e',
    },

    orange: {
      50: '#fff7ed',
      100: '#ffedd5',
      200: '#fed7aa',
      300: '#fdba74',
      400: '#fb923c',
      500: '#f97316',
      600: '#ea580c',
      700: '#c2410c',
      800: '#9a3412',
      900: '#7c2d12',
      950: '#431407',
    },
  },

  // ── 颜色令牌：Apple 中性底 + Notion 蓝紫强调 ──
  color: {
    base: {
      default: {
        bg: [{ hue: 'gray', tint: 50 }],
        fg: [{ hue: 'gray', tint: 900 }],
        border: [{ hue: 'gray', tint: 200 }],
        focusRing: [{ hue: 'blue', tint: 500 }],
        shadow: [{ hue: 'gray', tint: 900, mix: 8, opacity: 8 }],
      },
      transparent: {
        bg: [{ hue: 'gray', tint: 50, opacity: 90 }],
        fg: [{ hue: 'gray', tint: 900 }],
        border: [{ hue: 'gray', tint: 200, opacity: 40 }],
        shadow: [{ hue: 'gray', tint: 900, mix: 8, opacity: 8 }],
      },
    },
    button: {
      default: {
        default: {
          bg: [{ hue: 'gray', tint: 100 }],
          fg: [{ hue: 'gray', tint: 800 }],
          border: [{ hue: 'gray', tint: 200 }],
          muted: {
            fg: [{ hue: 'gray', tint: 400 }],
          },
        },
        hovered: {
          bg: [{ hue: 'gray', tint: 200 }],
          fg: [{ hue: 'gray', tint: 900 }],
        },
        pressed: {
          bg: [{ hue: 'gray', tint: 300 }],
        },
        selected: {
          bg: [{ hue: 'gray', tint: 200 }],
        },
        disabled: {
          bg: [{ hue: 'gray', tint: 50, opacity: 60 }],
          fg: [{ hue: 'gray', tint: 400, opacity: 60 }],
        },
      },
      ghost: {
        default: {
          bg: ['white'],
          fg: [{ hue: 'gray', tint: 600 }],
          muted: {
            fg: [{ hue: 'gray', tint: 400 }],
          },
        },
        hovered: {
          bg: [{ hue: 'gray', tint: 100 }],
          fg: [{ hue: 'gray', tint: 900 }],
        },
        pressed: {
          bg: [{ hue: 'gray', tint: 200 }],
        },
        selected: {
          bg: [{ hue: 'gray', tint: 100 }],
        },
      },
      bleed: {
        default: {
          bg: ['white'],
          fg: [{ hue: 'gray', tint: 600 }],
        },
        hovered: {
          bg: [{ hue: 'blue', tint: 50, opacity: 80 }],
          fg: [{ hue: 'blue', tint: 600 }],
        },
        pressed: {
          bg: [{ hue: 'blue', tint: 100 }],
        },
        selected: {
          bg: [{ hue: 'blue', tint: 50 }],
          fg: [{ hue: 'blue', tint: 700 }],
        },
      },
    },
    input: {
      default: {
        default: {
          bg: ['white'],
          fg: [{ hue: 'gray', tint: 900 }],
          border: [{ hue: 'gray', tint: 300 }],
          placeholder: [{ hue: 'gray', tint: 400 }],
        },
        hovered: {
          border: [{ hue: 'gray', tint: 400 }],
        },
        readOnly: {
          bg: [{ hue: 'gray', tint: 50 }],
          border: [{ hue: 'gray', tint: 200 }],
        },
        disabled: {
          bg: [{ hue: 'gray', tint: 50, opacity: 60 }],
          fg: [{ hue: 'gray', tint: 500 }],
          border: [{ hue: 'gray', tint: 200, opacity: 60 }],
        },
      },
      invalid: {
        default: {
          border: [{ hue: 'red', tint: 500 }],
        },
      },
    },
    selectable: {
      default: {
        default: {
          bg: ['white'],
          fg: [{ hue: 'gray', tint: 600 }],
        },
        hovered: {
          bg: [{ hue: 'blue', tint: 50 }],
        },
        pressed: {
          bg: [{ hue: 'blue', tint: 100 }],
        },
        selected: {
          bg: [{ hue: 'blue', tint: 50 }],
          fg: [{ hue: 'blue', tint: 700 }],
        },
        disabled: {
          bg: ['white', { opacity: 60 }],
          fg: [{ hue: 'gray', tint: 400 }],
        },
      },
    },
    syntax: {
      atrule: { fg: [{ hue: 'purple', tint: 500 }] },
      attrName: { fg: [{ hue: 'blue', tint: 600 }] },
      attrValue: { fg: [{ hue: 'green', tint: 600 }] },
      attribute: { fg: [{ hue: 'blue', tint: 600 }] },
      boolean: { fg: [{ hue: 'orange', tint: 500 }] },
      builtin: { fg: [{ hue: 'purple', tint: 500 }] },
      cdata: { fg: [{ hue: 'gray', tint: 500 }] },
      char: { fg: [{ hue: 'green', tint: 600 }] },
      class: { fg: [{ hue: 'blue', tint: 600 }] },
      className: { fg: [{ hue: 'cyan', tint: 600 }] },
      comment: { fg: [{ hue: 'gray', tint: 400 }] },
      constant: { fg: [{ hue: 'orange', tint: 500 }] },
      deleted: { fg: [{ hue: 'red', tint: 500 }] },
      entity: { fg: [{ hue: 'magenta', tint: 500 }] },
      function: { fg: [{ hue: 'blue', tint: 500 }] },
      hexcode: { fg: [{ hue: 'cyan', tint: 600 }] },
      id: { fg: [{ hue: 'orange', tint: 600 }] },
      important: { fg: [{ hue: 'magenta', tint: 500 }] },
      inserted: { fg: [{ hue: 'green', tint: 600 }] },
      keyword: { fg: [{ hue: 'purple', tint: 500 }] },
      number: { fg: [{ hue: 'orange', tint: 500 }] },
      operator: { fg: [{ hue: 'gray', tint: 600 }] },
      property: { fg: [{ hue: 'cyan', tint: 600 }] },
      pseudoClass: { fg: [{ hue: 'magenta', tint: 500 }] },
      pseudoElement: { fg: [{ hue: 'magenta', tint: 500 }] },
      punctuation: { fg: [{ hue: 'gray', tint: 500 }] },
      regex: { fg: [{ hue: 'red', tint: 500 }] },
      selector: { fg: [{ hue: 'green', tint: 600 }] },
      string: { fg: [{ hue: 'green', tint: 600 }] },
      symbol: { fg: [{ hue: 'orange', tint: 500 }] },
      tag: { fg: [{ hue: 'blue', tint: 600 }] },
      unit: { fg: [{ hue: 'orange', tint: 500 }] },
      url: { fg: [{ hue: 'blue', tint: 500 }] },
      variable: { fg: [{ hue: 'orange', tint: 600 }] },
    },
  },

  // ── 阴影：柔和大阴影 Apple 风格 ──
  shadow: [
    null,
    { umbra: [0, 0, 0, 4], penumbra: [0, 0, 0, 6], ambient: [0, 0, 0, 8] },
    { umbra: [0, 1, 2, 4], penumbra: [0, 2, 4, 6], ambient: [0, 4, 8, 8] },
    { umbra: [0, 2, 4, 4], penumbra: [0, 4, 8, 6], ambient: [0, 8, 16, 6] },
    { umbra: [0, 4, 8, 4], penumbra: [0, 8, 16, 8], ambient: [0, 16, 32, 6] },
    { umbra: [0, 8, 16, 4], penumbra: [0, 16, 32, 10], ambient: [0, 24, 48, 6] },
  ],

  // ── 输入框：圆角 12px ──
  input: {
    border: { width: 1.5 },
    checkbox: { size: 18, radius: 4 },
    radio: { size: 18 },
    switch: { width: 32, height: 20, padding: 3 },
    radius: [4, 8, 12],
    space: [6, 10, 14],
    text: { fontWeight: 'regular' },
    select: {
      fontWeight: 'regular',
    },
  },

  // ── 按钮圆角 12px ──
  button: {
    border: { width: 1.5 },
    focusRing: { offset: 2, width: 2 },
    textWeight: 'medium',
  },

  // ── 卡片：柔和边框 + 对焦环 ──
  card: {
    border: { width: 1 },
    focusRing: { offset: 0, width: 3 },
    shadow: { outline: 2 },
  },
};

export const theme = buildTheme(baseConfig);
