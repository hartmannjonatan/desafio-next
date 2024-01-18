import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'author',
      title: 'Autor',
      type: 'string'
    }),
    defineField({
      name: 'mainImage',
      title: 'Imagem destaque',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Publicado em',
      type: 'date',
    }),
    defineField({
      name: 'body',
      title: 'Texto',
      type: 'text',
    }),
  ]
})
