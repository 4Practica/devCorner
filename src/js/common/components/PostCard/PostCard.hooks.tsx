import { useContext } from 'react'
import { PostCardContext } from './PostCard'

type ComponentParam =
  | 'Description'
  | 'Author'
  | 'Tags'
  | 'Title'
  | 'Image'
  | 'CTA'
export const usePostcard = (componentName: ComponentParam) => {
  const isInPostcard = useContext(PostCardContext)
  if (isInPostcard) {
    return
  }
  throw new Error(
    `El componente ${componentName} solo puede ser usado dentro de un PostCard como <PostCard.${componentName}`
  )
}
