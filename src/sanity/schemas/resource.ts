import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'resource',
  title: '資源',
  type: 'document',
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'settings', title: 'Settings' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: '標題',
      type: 'string',
      group: 'content',
      validation: (Rule) => Rule.required(),
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
      name: 'type',
      title: '類型',
      type: 'string',
      group: 'content',
      options: {
        list: [
          { title: 'PDF', value: 'pdf' },
          { title: 'PPT', value: 'ppt' },
          { title: '連結', value: 'link' },
          { title: '影片', value: 'video' },
          { title: '外部資源', value: 'external' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'file',
      title: '檔案',
      type: 'file',
      group: 'content',
      description: '上傳 PDF 或 PPT 檔案。',
      hidden: ({ document }) =>
        document?.type !== 'pdf' && document?.type !== 'ppt',
    }),
    defineField({
      name: 'externalUrl',
      title: '外部連結',
      type: 'url',
      group: 'content',
      description: 'Google Drive、YouTube 或其他外部資源連結。',
      hidden: ({ document }) =>
        document?.type === 'pdf' || document?.type === 'ppt',
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
      name: 'description',
      title: '描述',
      type: 'text',
      group: 'content',
      rows: 3,
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
    { title: '排序 (升序)', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'type',
      media: 'coverImage',
    },
    prepare({ title, subtitle, media }) {
      const typeMap: Record<string, string> = {
        pdf: 'PDF',
        ppt: 'PPT',
        link: '連結',
        video: '影片',
        external: '外部資源',
      };
      return {
        title,
        subtitle: typeMap[subtitle as string] || subtitle,
        media,
      };
    },
  },
});
