export const newsSchema = {
  name: 'news',
  title: 'News & Insights',
  type: 'document',
  fields: [
    {
      name: 'titleEn',
      title: 'Title (English)',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'titleAr',
      title: 'Title (Arabic)',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'titleEn', maxLength: 96 },
      validation: Rule => Rule.required(),
    },
    {
      name: 'date',
      title: 'Publication Date',
      type: 'datetime',
      validation: Rule => Rule.required(),
    },
    {
      name: 'author',
      title: 'Author Name',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Legal Update', value: 'legal-update' },
          { title: 'Case Study', value: 'case-study' },
          { title: 'Firm News', value: 'firm-news' },
        ],
        layout: 'radio',
      },
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'excerptEn',
      title: 'Excerpt (English)',
      type: 'text',
      rows: 3,
      description: 'Short summary shown in the news grid',
    },
    {
      name: 'excerptAr',
      title: 'Excerpt (Arabic)',
      type: 'text',
      rows: 3,
    },
    {
      name: 'bodyEn',
      title: 'Body / Content (English)',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Heading 2', value: 'h2' },
            { title: 'Heading 3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Underline', value: 'underline' },
            ],
          },
        },
        { type: 'image', options: { hotspot: true } },
      ],
    },
    {
      name: 'bodyAr',
      title: 'Body / Content (Arabic)',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Heading 2', value: 'h2' },
            { title: 'Heading 3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Underline', value: 'underline' },
            ],
          },
        },
        { type: 'image', options: { hotspot: true } },
      ],
    },
  ],
  preview: {
    select: { title: 'titleEn', subtitle: 'category', media: 'coverImage' },
  },
}
