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
      if (typeof body === 'string') {
        // Server error
        const requestError: CmsRequestError = {
          message: body,
          status: status,
          success: false,
        }
        return requestError
      }
      if (body.data === null) {
        //Strapi error
        const requestError: CmsRequestError = {
          message: body.error.name + ' ' + body.error.message,
          status: body.error.status,
          success: false,
        }
        return requestError
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
}

const strapiHttpClient = new HttpClient({
  url: import.meta.env.VITE_APP_CMS_URL || 'localhost:1337/api',
  methods: ['GET'],
  serviceName: 'StrapiHttpClient',
})

export const strapiCmsService = new StrapiCmsService(strapiHttpClient)
