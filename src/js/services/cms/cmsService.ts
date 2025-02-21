import { BlogPost } from '@common/utils/types/blogPost'
import { strapiCmsService } from './strapi/service'
import {
  BlogPostBySearchParameters,
  BlogPostParameters,
  BlogPostsParameters,
} from './strapi/types/requestParameters'
import { Author } from '@common/utils/types/author'
import { Newsletter, NewsletterAttributes } from './strapi/types/newsletter'
import { StrapiMetaData } from './strapi/types/strapiResponse'
/*  
    Using adapter pattern to be able to switch between differents services if required
    More about adapter pattern: https://refactoring.guru/design-patterns/adapter

    The service should respect the CmsBlogService interface to be able
    to switch the service without affecting the components
*/

export const cmsClient = strapiCmsService

export interface CmsRequestResult<T> {
  data: T
  success: true
  status: number
}

export interface CmsRequestResultWithPagination<T> {
  data: T
  success: true
  status: number
  meta: StrapiMetaData | undefined
}

export interface CmsRequestError {
  message: string
  success: false
  status: number
}
export interface CmsBlogService {
  getBlogPosts({
    page,
  }: BlogPostsParameters): Promise<
    CmsRequestResultWithPagination<BlogPost[]> | CmsRequestError
  >
  getBlogPost({
    slug,
  }: BlogPostParameters): Promise<CmsRequestResult<BlogPost> | CmsRequestError>
  getBlogPostsBySearch({
    search,
  }: BlogPostBySearchParameters): Promise<
    CmsRequestResult<BlogPost[]> | CmsRequestError
  >
  getAuthors(): Promise<CmsRequestResult<Author[]> | CmsRequestError>
  subscribeToNewsletter({
    email,
  }: NewsletterAttributes): Promise<
    CmsRequestResult<Newsletter> | CmsRequestError
  >
}
