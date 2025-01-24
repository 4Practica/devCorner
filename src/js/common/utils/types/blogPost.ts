import { ViewMetaData } from '@common/layout/MetaData/MetaData.types'
import { Author } from './author'
import { Tag } from './tag'

export interface BlogPost {
  id: number
  title: string
  shortDescription: string
  blogMd: string
  author: Author
  img: BlogPostImg
  date: string
  tags: Tag[]
  slug: string
  meta?: ViewMetaData
}

interface BlogPostImg {
  src: ImgSourceSizes
  alt: string
}
interface ImgSourceSizes {
  xs: string
  sm: string
  md: string
  lg: string
}
