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
  BlogPostsParameters,
} from './types/requestParameters'
import { errorHandler } from './utils/errorHandler'
import { Author } from '@common/utils/types/author'
import { StrapiAuthor } from './types/author'
import { authorAdapter } from './adapters/authorAdapter'
import { Newsletter, NewsletterAttributes } from './types/newsletter'
import { metaDataAdapter } from './adapters/metaDataAdapter'

const CMS_TOKEN = import.meta.env.VITE_CMS_TOKEN || 'Error al extraer el otken'

export class StrapiCmsService implements CmsBlogService {
  readonly client: HttpClient

  constructor(client: HttpClient) {
    this.client = client
  }

  async getBlogPosts({
    page,
  }: BlogPostsParameters): Promise<
    CmsRequestResult<BlogPost[]> | CmsRequestError
  > {
    try {
      const DEFAULT_PAGE = 1
      let requestPath = `/blogs?populate=*`

      // Adds query params for pagination
      if (page !== undefined && page >= DEFAULT_PAGE) {
        requestPath += `&pagination[page]=${page}&pagination[pageSize]=9`
      }

      const { body, status } = await this.client.get<
        StrapiResponse<StrapiBlogPost[]> | StrapiErrorResponse
      >({ path: requestPath, authentication: `Bearer ${CMS_TOKEN}` })

      if (typeof body === 'string' || body.data === null) {
        const error = errorHandler({ body, status })
        return error
      }

      const blogPosts: BlogPost[] = []
      for (const blog of body.data) {
        const blogPostAuthor = authorAdapter(blog.attributes.author.data)
        const blogPostAdapted = blogPostAdapter(blog, blogPostAuthor)
        blogPosts.push(blogPostAdapted)
      }

      const result: CmsRequestResult<BlogPost[]> = {
        data: blogPosts,
        meta: body.meta,
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
      const blogPostMetaData = metaDataAdapter(
        body.data.attributes.meta_datum.data
      )
      const blogPostAuthor = authorAdapter(body.data.attributes.author.data)
      const blogPostAdapted = blogPostAdapter(
        body.data,
        blogPostAuthor,
        blogPostMetaData
      )

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
        const blogPostAuthor = authorAdapter(blog.attributes.author.data)
        const blogPostAdapted = blogPostAdapter(blog, blogPostAuthor)
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

  async subscribeToNewsletter({
    email,
  }: NewsletterAttributes): Promise<
    CmsRequestResult<Newsletter> | CmsRequestError
  > {
    const { body, status } = await this.client.request<
      StrapiResponse<Newsletter> | StrapiErrorResponse,
      NewsletterAttributes
    >({
      method: 'POST',
      path: `/newsletter`,
      authentication: `Bearer ${CMS_TOKEN}`,
      payload: { email },
    })
    if (typeof body === 'string' || body.data === null) {
      const error = errorHandler({ body, status })
      return error
    }

    return {
      data: body.data,
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
