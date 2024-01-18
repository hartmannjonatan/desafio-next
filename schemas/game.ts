import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'game',
  title: 'Jogo',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nome do jogo',
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
      name: 'value',
      title: 'Valor',
      type: 'number'
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
      name: 'secondaryImage',
      title: 'Imagem secundária',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'description',
      title: 'Descrição',
      type: 'text',
    }),
  ]
})
