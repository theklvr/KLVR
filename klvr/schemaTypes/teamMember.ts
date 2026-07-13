import {defineField, defineType} from 'sanity'

export const teamMember = defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    defineField({name: 'name', title: 'Name', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'role', title: 'Role', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({
      name: 'image',
      title: 'Photo URL',
      description: 'Paste an image URL for now (native uploads can replace this later)',
      type: 'url',
    }),
    defineField({name: 'hoverTitle', title: 'Hover Card: Title', description: 'e.g. "Hi There !"', type: 'string'}),
    defineField({name: 'hoverText', title: 'Hover Card: Text', type: 'text', rows: 2}),
    defineField({name: 'order', title: 'Display Order', type: 'number', validation: (Rule) => Rule.required()}),
  ],
  orderings: [
    {title: 'Display Order', name: 'orderAsc', by: [{field: 'order', direction: 'asc'}]},
  ],
  preview: {
    select: {title: 'name', subtitle: 'role'},
  },
})
