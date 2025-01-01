export interface StrapiBlogPost {
  id: number
  attributes: StrapiBlogPostAttributes
}
interface StrapiBlogPostAttributes {
  blogData: string
  imageAlt: string
  imageUrl: string
  shortDescription: string
  title: string
  createdAt: string
  locale: string
  slug: string
  publishedAt: string
  updatedAt: string
  author: AuthorData
  tags: TagData
}
interface AuthorAttributes {
  name: string
  shortDescription: string
  imageUrl: string
  createAt: string
  updatedAt: string
  publishedAt: string
  webAddress: string
  githubUrl: string
  linkedInUrl: string
}
interface AuthorBase {
  id: number
  attributes: AuthorAttributes
}
interface AuthorData {
  data: AuthorBase
}
interface TagAttributes {
  name: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  locale: string
  slug: string
}
interface TagsBase {
  id: number
  attributes: TagAttributes
}
interface TagData {
  data: TagsBase[]
}
