import type { CollectionConfig } from 'payload'

export const Poster: CollectionConfig = {
  slug: 'poster',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'code',
      type: 'text',
      required: true,
    },
    {
      name: 'color',
      type: 'text',
      required: true,
    },
  ],
  upload: true,
}
