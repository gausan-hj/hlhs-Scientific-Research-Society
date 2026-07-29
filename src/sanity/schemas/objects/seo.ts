import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  options: { collapsible: true, collapsed: true },
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'Title used for SEO and browser tabs. Falls back to document title if empty.',
      validation: (Rule) => Rule.max(70).warning('Should be under 70 characters for optimal SEO.'),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: 'Description for search engines. Falls back to excerpt if empty.',
      validation: (Rule) => Rule.max(160).warning('Should be under 160 characters for optimal SEO.'),
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      description: 'Image shown when sharing on social media. Recommended size: 1200×630px.',
      options: { hotspot: true },
    }),
  ],
});
