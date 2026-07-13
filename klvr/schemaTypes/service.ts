import {defineField, defineType} from 'sanity'

export const service = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({name: 'num', title: 'Number label', description: 'e.g. "01"', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({
      name: 'anchorId',
      title: 'Anchor ID',
      description: 'Used for header dropdown links, e.g. "pillar-build". Do not change without updating the header links.',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'description', title: 'Description', type: 'text', rows: 3}),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({name: 'order', title: 'Display Order', type: 'number', validation: (Rule) => Rule.required()}),
  ],
  orderings: [
    {title: 'Display Order', name: 'orderAsc', by: [{field: 'order', direction: 'asc'}]},
  ],
  preview: {
    select: {title: 'title', subtitle: 'num'},
  },
})
