import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'activity',
  title: '活動',
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
      name: 'date',
      title: '活動日期',
      type: 'datetime',
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'endDate',
      title: '結束日期 (可選)',
      type: 'datetime',
      group: 'content',
    }),
    defineField({
      name: 'location',
      title: '地點',
      type: 'string',
      group: 'content',
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
        },
      ],
    }),
    defineField({
      name: 'excerpt',
      title: '摘要',
      type: 'text',
      group: 'content',
      rows: 3,
    }),
    defineField({
      name: 'body',
      title: '活動內容',
      type: 'blockContent',
      group: 'content',
    }),
    defineField({
      name: 'gallery',
      title: '活動相冊',
      type: 'array',
      group: 'content',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt', type: 'string', title: '替代文字' },
            { name: 'caption', type: 'string', title: '說明' },
          ],
        },
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
    }),
    defineField({
      name: 'featured',
      title: '精選',
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
    }),
  ],
  orderings: [
    { title: '活動日期 (新→舊)', name: 'dateDesc', by: [{ field: 'date', direction: 'desc' }] },
    { title: '排序 (升序)', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'date',
      media: 'coverImage',
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: subtitle ? new Date(subtitle as string).toLocaleDateString('zh-HK') : '',
        media,
      };
    },
  },
});
