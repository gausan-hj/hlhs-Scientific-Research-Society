import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'homepage',
  title: '首頁內容',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero Banner', default: true },
    { name: 'about', title: '學會簡介' },
    { name: 'cta', title: 'CTA' },
    { name: 'features', title: '學會特色' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: '頁面標題 (內部辨識)',
      type: 'string',
      initialValue: '首頁',
      validation: (Rule) => Rule.required(),
    }),
    // Hero
    defineField({
      name: 'heroTitle',
      title: 'Hero 標題',
      type: 'string',
      group: 'hero',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero 副標題',
      type: 'text',
      group: 'hero',
      rows: 3,
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero 背景圖片',
      type: 'image',
      group: 'hero',
      options: { hotspot: true },
      fields: [
        { name: 'alt', type: 'string', title: '替代文字' },
      ],
    }),
    defineField({
      name: 'heroButtonText',
      title: 'Hero 按鈕文字',
      type: 'string',
      group: 'hero',
      initialValue: '了解更多',
    }),
    defineField({
      name: 'heroButtonLink',
      title: 'Hero 按鈕連結',
      type: 'string',
      group: 'hero',
      initialValue: '/about',
    }),
    // About
    defineField({
      name: 'aboutTitle',
      title: '簡介標題',
      type: 'string',
      group: 'about',
      initialValue: '關於我們',
    }),
    defineField({
      name: 'aboutText',
      title: '簡介內容',
      type: 'blockContent',
      group: 'about',
    }),
    defineField({
      name: 'aboutImage',
      title: '簡介圖片',
      type: 'image',
      group: 'about',
      options: { hotspot: true },
      fields: [
        { name: 'alt', type: 'string', title: '替代文字' },
      ],
    }),
    // Features
    defineField({
      name: 'features',
      title: '學會特色',
      type: 'array',
      group: 'features',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'icon',
              title: '圖示名稱',
              type: 'string',
              description: '使用 Tabler Icons 名稱，例如：flask, users, trophy, book',
            },
            { name: 'title', title: '標題', type: 'string', validation: (Rule) => Rule.required() },
            { name: 'description', title: '描述', type: 'text', rows: 2 },
          ],
          preview: {
            select: { title: 'title', subtitle: 'description' },
          },
        },
      ],
    }),
    // CTA
    defineField({
      name: 'ctaTitle',
      title: 'CTA 標題',
      type: 'string',
      group: 'cta',
      initialValue: '加入我們',
    }),
    defineField({
      name: 'ctaText',
      title: 'CTA 內容',
      type: 'text',
      group: 'cta',
      rows: 3,
    }),
    defineField({
      name: 'ctaButtonText',
      title: 'CTA 按鈕文字',
      type: 'string',
      group: 'cta',
      initialValue: '立即報名',
    }),
    defineField({
      name: 'ctaButtonLink',
      title: 'CTA 按鈕連結',
      type: 'string',
      group: 'cta',
      initialValue: '/join',
    }),
  ],
  preview: {
    prepare() {
      return { title: '首頁內容' };
    },
  },
});
