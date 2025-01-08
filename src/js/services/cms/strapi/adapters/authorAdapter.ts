import { Author } from '@common/utils/types/author'
import { StrapiAuthor } from '../types/author'

export const authorAdapter = (data: StrapiAuthor): Author => {
  const { id, attributes } = data
  const author: Author = {
    id,
    name: attributes.name,
    role: attributes.role,
    webAddress: attributes.webAddress,
    avatar: attributes.imageUrl,
    linkedinUrl: attributes.linkedInUrl,
    githubUrl: attributes.githubUrl,
    description: attributes.shortDescription,
  }
  return author
}
