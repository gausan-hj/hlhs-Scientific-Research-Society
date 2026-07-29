import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'announcement',
  title: '公告',
  type: 'document',
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'seo', title: 'SEO' },
    { name: 'settings', title: 'Settings' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: '標題',
      type: 'string',
      group: 'content',
      validation: (Rule) => Rule.required().max(120),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'content',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: '發布時間',
      type: 'datetime',
      group: 'content',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: '分類',
      type: 'string',
      group: 'content',
      options: {
        list: [
          { title: '一般公告', value: 'general' },
          { title: '活動消息', value: 'event' },
          { title: '比賽資訊', value: 'competition' },
          { title: '學術分享', value: 'academic' },
          { title: '其他', value: 'other' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: '封面圖片',
      type: 'image',
      group: 'content',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: '替代文字',
          description: '描述圖片內容，供無障礙及 SEO 使用。',
        },
      ],
    }),
    defineField({
      name: 'excerpt',
      title: '摘要',
      type: 'text',
      group: 'content',
      rows: 3,
      description: '簡短摘要，顯示在列表頁。',
    }),
    defineField({
      name: 'body',
      title: '內容',
      type: 'blockContent',
      group: 'content',
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
    }),
    defineField({
      name: 'featured',
      title: '置頂 / 精選',
      type: 'boolean',
      group: 'settings',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: '排序',
      type: 'number',
      group: 'settings',
      initialValue: 0,
      description: '數字越小越靠前。',
    }),
  ],
  orderings: [
    { title: '發布日期 (新→舊)', name: 'publishedAtDesc', by: [{ field: 'publishedAt', direction: 'desc' }] },
    { title: '排序 (升序)', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'coverImage',
      date: 'publishedAt',
    },
    prepare({ title, subtitle, media, date }) {
      const categoryMap: Record<string, string> = {
        general: '一般公告',
        event: '活動消息',
        competition: '比賽資訊',
        academic: '學術分享',
        other: '其他',
      };
      return {
        title,
        subtitle: `${categoryMap[subtitle as string] || subtitle} — ${date ? new Date(date as string).toLocaleDateString('zh-HK') : ''}`,
        media,
      };
    },
  },
});
