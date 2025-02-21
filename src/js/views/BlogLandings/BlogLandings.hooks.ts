import { BlogPost } from '@common/utils/types/blogPost'
import { cmsClient } from '@services/cms/cmsService'
import { StrapiMetaData } from '@services/cms/strapi/types/strapiResponse'
import { useEffect, useState } from 'react'

export function useBlogs() {
  const DEFAULT_PAGE = 1

  const [blogPosts, setBlogPosts] = useState<BlogPost[] | undefined>()
  const [page, setPage] = useState<number>(DEFAULT_PAGE)
  const [metaBlogs, setMetaBlogs] = useState<StrapiMetaData | undefined>()

  const handleRequest = async () => {
    const response = await cmsClient.getBlogPosts({ page })
    if (response.success === false) {
      console.log('Error en la solicitud, muestra un modal acá')
      setBlogPosts(undefined)
      return
    }
    if (response.meta !== undefined) {
      setMetaBlogs(response.meta)
    }
    setBlogPosts(response.data)
  }

  const handlePagination = (direction: string) => {
    const newPageNumber = 1
    if (direction === 'previous' && page !== DEFAULT_PAGE) {
      return setPage(page - newPageNumber)
    }
    return setPage(page + newPageNumber)
  }

  const handleFilter = async (search: string) => {
    // Setting to undefined for loading animation
    setBlogPosts(undefined)

    if (search.trim() === '') {
      return handleRequest()
    }

    const finalString = search.replace(' ', '-')

    const response = await cmsClient.getBlogPostsBySearch({
      search: finalString,
    })
    if (response.success === false) {
      console.log('Error en la solicitud, muestra un modal acá')
      handleRequest()
      return
    }
    setBlogPosts(response.data)
  }

  useEffect(() => {
    handleRequest()
  }, [page])

  return {
    blogPosts,
    page,
    metaBlogs,
    DEFAULT_PAGE,
    handleFilter,
    handlePagination,
  }
}
