export interface StrapiMetaDataStructure {
  data: StrapiMetaData | null
}

export interface StrapiMetaData {
  id: number
  attributes: StrapiMetaDataAttributes
}

interface StrapiMetaDataAttributes {
  createdAt: string
  updatedAt: string
  publishedAt: string
  locale: string
  Slug: string
  MetaDescription: string
  MetaTitle: string
  OgTitle: string
  OgType: string
  OgUrl: string
  OgImage: string
  OgDescription: string
  OgSiteName: string
  OgLocale: string
  OgImageAlt: string
  TwitterCard: string
  TwitterTitle: string
  TwitterDescription: string
  TwitterImage: string
  TwitterImageAlt: string
  TwitterSite: string | null
  TwitterSiteId: string | null
  TwitterCreator: string | null
}
