import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'committee',
  title: '理事',
  type: 'document',
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'settings', title: 'Settings' },
  ],
  fields: [
    defineField({
      name: 'name',
      title: '姓名',
      type: 'string',
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'content',
      options: { source: 'name', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: '職位',
      type: 'string',
      group: 'content',
      options: {
        list: [
          { title: '主席', value: 'president' },
          { title: '副主席', value: 'vice-president' },
          { title: '秘書', value: 'secretary' },
          { title: '財政', value: 'treasurer' },
          { title: '學術', value: 'academic' },
          { title: '宣傳', value: 'publicity' },
          { title: '總務', value: 'general-affairs' },
          { title: '康樂', value: 'recreation' },
          { title: 'IT', value: 'it' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'term',
      title: '屆別 / 年份',
      type: 'string',
      group: 'content',
      description: '例如：2025-2026、第15屆',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'photo',
      title: '照片',
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
      name: 'bio',
      title: '簡介',
      type: 'text',
      group: 'content',
      rows: 2,
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
    { title: '屆別 (新→舊)', name: 'termDesc', by: [{ field: 'term', direction: 'desc' }] },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'photo',
      term: 'term',
    },
    prepare({ title, subtitle, media, term }) {
      const roleMap: Record<string, string> = {
        president: '主席',
        'vice-president': '副主席',
        secretary: '秘書',
        treasurer: '財政',
        academic: '學術',
        publicity: '宣傳',
        'general-affairs': '總務',
        recreation: '康樂',
        it: 'IT',
      };
      return {
        title,
        subtitle: `${roleMap[subtitle as string] || subtitle} — ${term}`,
        media,
      };
    },
  },
});
