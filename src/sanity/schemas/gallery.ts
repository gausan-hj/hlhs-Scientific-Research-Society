import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'gallery',
  title: '相冊',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: '標題',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'group',
      title: '分組',
      type: 'string',
      options: {
        list: [
          { title: '活動照片', value: 'activity' },
          { title: '日常點滴', value: 'daily' },
          { title: '比賽花絮', value: 'competition' },
          { title: '其他', value: 'other' },
        ],
      },
    }),
    defineField({
      name: 'images',
      title: '圖片',
      type: 'array',
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
      name: 'order',
      title: '排序',
      type: 'number',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'group',
      media: 'images.0',
    },
    prepare({ title, subtitle, media }) {
      const groupMap: Record<string, string> = {
        activity: '活動照片',
        daily: '日常點滴',
        competition: '比賽花絮',
        other: '其他',
      };
      return {
        title,
        subtitle: groupMap[subtitle as string] || subtitle,
        media,
      };
    },
  },
});
