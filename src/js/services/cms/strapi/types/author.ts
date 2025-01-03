export interface StrapiAuthorDataStructure {
  data: StrapiAuthor
}

interface StrapiAuthorAttributes {
  name: string
  shortDescription: string
  imageUrl: string
  createAt: string
  updatedAt: string
  publishedAt: string
  webAddress: string
  githubUrl: string
  linkedInUrl: string
  role: string
}
export interface StrapiAuthor {
  id: number
  attributes: StrapiAuthorAttributes
}
