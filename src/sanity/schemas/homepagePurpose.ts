import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'homepagePurpose',
  title: '首页 — 学会目的',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: '内部标题',
      type: 'string',
      initialValue: '首页目的',
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
      return { title: '首页 — 学会目的' };
    },
  },
});
