import { BlogPost } from '@common/utils/types/blogPost'
import { cmsClient } from '@services/cms/cmsService'
import { useEffect, useState } from 'react'

export function useBlogs() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[] | undefined>()

  const handleRequest = async () => {
    const response = await cmsClient.getBlogPosts()
    if (response.success === false) {
      console.log('Error en la solicitud, muestra un modal acá')
      setBlogPosts(undefined)
      return
    }
    setBlogPosts(response.data)
  }

  useEffect(() => {
    handleRequest()
  }, [])

  return { blogPosts }
}
