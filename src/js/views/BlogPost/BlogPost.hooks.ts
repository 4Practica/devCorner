import { BlogPost } from '@common/utils/types/blogPost'
import { cmsClient } from '@services/cms/cmsService'
import { useEffect, useState } from 'react'
import { NavigateFunction } from 'react-router-dom'

export function useBlogPost(path: string, navigate: NavigateFunction) {
  const [blogPost, setBlogPost] = useState<BlogPost>()

  useEffect(() => {
    const handleRequest = async (slug: string): Promise<void> => {
      const response = await cmsClient.getBlogPost({ slug })

      if (response.success === false) {
        console.log('Error en la solicitud')
        navigate('/blog')
        return
      }

      setBlogPost(response.data)
    }

    handleRequest(path)
  }, [path, navigate])

  return { blogPost }
}
