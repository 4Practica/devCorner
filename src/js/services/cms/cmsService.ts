import { BlogPost } from "@common/utils/types/blogPost";
import { strapiCmsService } from "./strapi/service";
/*  
    Using adapter pattern to be able to switch between differents services if required
    More about adapter pattern: https://refactoring.guru/design-patterns/adapter

    The service should respect the CmsBlogService interface to be able
    to switch the service without affecting the components
*/

export const cmsClient = strapiCmsService;

export interface CmsRequestResult<T> {
    data: T;
    success: true;
    status: number;
}

export interface CmsRequestError {
    message: string;
    success: false;
    status: number;
}
export interface CmsBlogService {
    getBlogPosts(): Promise<CmsRequestResult<BlogPost[]> | CmsRequestError > 
}
