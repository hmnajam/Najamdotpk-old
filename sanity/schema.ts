import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import category from './schemas/category'
import post from './schemas/post'
import author from './schemas/author'

import certificates from './schemas/certificates'
import projects from './schemas/projects'
import skills from './schemas/skills'




export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category, blockContent, certificates, projects, skills],
}
