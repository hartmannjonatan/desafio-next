import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Desafio Next',

  projectId: 'umc81na0',
  dataset: 'production',

  plugins: [structureTool()],

  basePath: "/studio",

  schema: {
    types: schemaTypes,
  },
})
