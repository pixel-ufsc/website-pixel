import member from './documents/member'
import project from './documents/projects'
import information from './singletons/information'

// Schemas created in the 'documents' or 'singletons' folders have to be exposed here
// so that they are exported to the studio.

// The 'documents' schemas are schemas that can be created multiple times, like a blog post.
// The 'objects' schemas are schemas that are used as a part of another schema, like a blog post having a 'author' object.
// The 'singletons' schemas are schemas where there will exist only one instance of it, like a site settings.

export const schemaTypes = [
  // Document schemas
  member,
  project,

  // Singleton schemas
  information,
]
