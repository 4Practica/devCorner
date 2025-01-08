import { formatDate } from '@common/utils/tools/formatDate'
import { StrapiBlogPost } from '../types/blogPost'
import { BlogPost } from '@common/utils/types/blogPost'
import { authorAdapter } from './authorAdapter'

export function blogPostAdapter(data: StrapiBlogPost): BlogPost {
  const { attributes } = data
  const {
    blogData,
    imageAlt,
    imageUrl,
    shortDescription,
    title,
    slug,
    publishedAt,
    author,
    tags,
  } = attributes

  const tagsData = tags.data.map((tagBase) => {
    return {
      id: tagBase.id,
      name: tagBase.attributes.name,
      slug: tagBase.attributes.slug,
    }
  })

  const authorData = authorAdapter(author.data)

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
  }
}
