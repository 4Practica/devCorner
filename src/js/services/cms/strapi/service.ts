import { HttpClient } from '@services/httpClient/client'
import {
  CmsBlogService,
  CmsRequestError,
  CmsRequestResult,
} from '../cmsService'
import { StrapiErrorResponse, StrapiResponse } from './types/strapiResponse'
import { StrapiBlogPost } from './types/blogPost'
import { blogPostAdapter } from './adapters/blogPostAdapter'
import { BlogPost } from '@common/utils/types/blogPost'
import {
  BlogPostBySearchParameters,
  BlogPostParameters,
} from './types/requestParameters'
import { errorHandler } from './utils/errorHandler'
import { Author } from '@common/utils/types/author'
import { StrapiAuthor } from './types/author'
import { authorAdapter } from './adapters/authorAdapter'

const CMS_TOKEN = import.meta.env.VITE_CMS_TOKEN || 'Error al extraer el otken'

export class StrapiCmsService implements CmsBlogService {
  readonly client: HttpClient

  constructor(client: HttpClient) {
    this.client = client
  }

  async getBlogPosts(): Promise<
    CmsRequestResult<BlogPost[]> | CmsRequestError
  > {
    try {
      const { body, status } = await this.client.get<
        StrapiResponse<StrapiBlogPost[]> | StrapiErrorResponse
      >({ path: '/blogs', authentication: `Bearer ${CMS_TOKEN}` })

      if (typeof body === 'string' || body.data === null) {
        const error = errorHandler({ body, status })
        return error
      }

      const blogPosts: BlogPost[] = []
      for (const blog of body.data) {
        const blogPostAdapted = blogPostAdapter(blog)
        blogPosts.push(blogPostAdapted)
      }
      const result: CmsRequestResult<BlogPost[]> = {
        data: blogPosts,
        success: true,
        status: status,
      }
      return result
    } catch (error) {
      const serverError: CmsRequestError = {
        message: 'Error del servidor',
        success: false,
        status: 500,
      }
      return serverError
    }
  }

  async getBlogPost({
    slug,
  }: BlogPostParameters): Promise<
    CmsRequestResult<BlogPost> | CmsRequestError
  > {
    try {
      const { body, status } = await this.client.get<
        StrapiResponse<StrapiBlogPost> | StrapiErrorResponse
      >({ path: `/blogs/${slug}`, authentication: `Bearer ${CMS_TOKEN}` })

      if (typeof body === 'string' || body.data === null) {
        const error = errorHandler({ body, status })
        return error
      }

      const blogPostAdapted = blogPostAdapter(body.data)

      const result: CmsRequestResult<BlogPost> = {
        data: blogPostAdapted,
        success: true,
        status: status,
      }

      return result
    } catch (error) {
      const serverError: CmsRequestError = {
        message: 'Error del servidor',
        success: false,
        status: 500,
      }
      return serverError
    }
  }

  async getBlogPostsBySearch({
    search,
  }: BlogPostBySearchParameters): Promise<
    CmsRequestResult<BlogPost[]> | CmsRequestError
  > {
    try {
      const { body, status } = await this.client.get<
        StrapiResponse<StrapiBlogPost[]> | StrapiErrorResponse
      >({
        path: `/blogs/filter/${search}`,
        authentication: `Bearer ${CMS_TOKEN}`,
      })

      if (typeof body === 'string' || body.data === null) {
        const error = errorHandler({ body, status })
        return error
      }

      const blogPosts: BlogPost[] = []
      for (const blog of body.data) {
        const blogPostAdapted = blogPostAdapter(blog)
        blogPosts.push(blogPostAdapted)
      }
      const result: CmsRequestResult<BlogPost[]> = {
        data: blogPosts,
        success: true,
        status: status,
      }
      return result
    } catch (error) {
      const serverError: CmsRequestError = {
        message: 'Error del servidor',
        success: false,
        status: 500,
      }
      return serverError
    }
  }

  async getAuthors(): Promise<CmsRequestResult<Author[]> | CmsRequestError> {
    const { body, status } = await this.client.get<
      StrapiResponse<StrapiAuthor[]> | StrapiErrorResponse
    >({
      path: `/authors`,
      authentication: `Bearer ${CMS_TOKEN}`,
    })
    if (typeof body === 'string' || body.data === null) {
      const error = errorHandler({ body, status })
      return error
    }
    const authors: Author[] = body.data.map(
      (strapiAuthor: StrapiAuthor): Author => authorAdapter(strapiAuthor)
    )
    return {
      data: authors,
      success: true,
      status: 200,
    }
  }
}

const strapiHttpClient = new HttpClient({
  url: import.meta.env.VITE_APP_CMS_URL || 'localhost:1337/api',
  methods: ['GET'],
  serviceName: 'StrapiHttpClient',
})

export const strapiCmsService = new StrapiCmsService(strapiHttpClient)
