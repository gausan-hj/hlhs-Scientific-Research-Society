import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'teacher',
  title: '顧問老師',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: '姓名',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: '職稱',
      type: 'string',
      description: '例如：學會顧問、指導老師',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'photo',
      title: '照片',
      type: 'image',
      options: { hotspot: true },
      fields: [
        { name: 'alt', type: 'string', title: '替代文字' },
      ],
    }),
    defineField({
      name: 'bio',
      title: '簡介',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'order',
      title: '排序',
      type: 'number',
      initialValue: 0,
    }),
  ],
  orderings: [
    { title: '排序 (升序)', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'title',
      media: 'photo',
    },
    prepare({ title, subtitle, media }) {
      return { title, subtitle, media };
    },
  },
});
