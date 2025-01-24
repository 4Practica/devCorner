import { formatDate } from '@common/utils/tools/formatDate'
import { StrapiBlogPost } from '../types/blogPost'
import { BlogPost } from '@common/utils/types/blogPost'
import { Author } from '@common/utils/types/author'
import { ViewMetaData } from '@common/layout/MetaData/MetaData.types'

export function blogPostAdapter(data: StrapiBlogPost, author: Author, metaData?: ViewMetaData): BlogPost {
  const { attributes } = data
  const {
    blogData,
    imageAlt,
    imageUrl,
    shortDescription,
    title,
    slug,
    publishedAt,
    tags,
  } = attributes

  const tagsData = tags.data.map((tagBase) => {
    return {
      id: tagBase.id,
      name: tagBase.attributes.name,
      slug: tagBase.attributes.slug,
    }
  })

  const authorData = author;
  const viewMetaData = metaData
  return {
    id: data.id,
    title: title,
    shortDescription: shortDescription,
    author: authorData,
    blogMd: blogData,
    img: {
      src: {
        xs: imageUrl,
        sm: imageUrl,
        md: imageUrl,
        lg: imageUrl,
      },
      alt: imageAlt,
    },
    date: formatDate(publishedAt),
    tags: tagsData,
    slug: slug,
    meta: viewMetaData
  }
}
