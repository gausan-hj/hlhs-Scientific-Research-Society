import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'memoryAlbum',
  title: '回憶簿',
  type: 'document',
  groups: [
    { name: 'content', title: '內容', default: true },
    { name: 'seo', title: 'SEO' },
    { name: 'settings', title: '設定' },
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
      name: 'eventDate',
      title: '活動日期',
      type: 'date',
      group: 'content',
      validation: (Rule) => Rule.required(),
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
    }),
    defineField({
      name: 'description',
      title: '活動簡介',
      type: 'text',
      group: 'content',
      rows: 4,
    }),
    defineField({
      name: 'coverImage',
      title: '封面圖片',
      type: 'image',
      group: 'content',
      options: { hotspot: true },
      fields: [
        { name: 'alt', type: 'string', title: '替代文字' },
      ],
    }),
    defineField({
      name: 'images',
      title: '照片',
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
      validation: (Rule) => Rule.min(1),
    }),
    defineField({
      name: 'publishedAt',
      title: '發布時間',
      type: 'datetime',
      group: 'settings',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
    }),
  ],
  orderings: [
    { title: '活動日期 (新→舊)', name: 'eventDateDesc', by: [{ field: 'eventDate', direction: 'desc' }] },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'eventDate',
      media: 'coverImage',
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: subtitle || '',
        media,
      };
    },
  },
});
