import { StrapiAuthorDataStructure } from './author'

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
  author: StrapiAuthorDataStructure
  tags: TagData
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
