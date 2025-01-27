export type ViewMetaData = IMetaData | null
export interface IMetaData {
  meta: MetaData
  og: OpenGraph
  tw: TwitterCards
}

export interface MetaData {
  title: string
  description: string
  author: string | null
}

export interface OpenGraph {
  title: string
  description: string
  type: string
  url: string
  image: string
  siteName: string | null
  locale: string | null
  imageAlt: string | null
}

export interface TwitterCards {
  card: string
  title: string
  description: string
  image: string
  imageAlt: string
  site: string | null
  siteId: string | null
  creator: string | null
}
