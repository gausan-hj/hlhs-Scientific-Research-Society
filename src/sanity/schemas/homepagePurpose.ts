import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'homepagePurpose',
  title: '回憶簿 — 學會目的',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: '內部標題',
      type: 'string',
      initialValue: '回憶簿目的',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'purposes',
      title: '目的列表',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.min(1),
    }),
  ],
  preview: {
    prepare() {
      return { title: '回憶簿 — 學會目的' };
    },
  },
});
