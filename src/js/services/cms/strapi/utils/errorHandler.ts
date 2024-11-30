import { CmsRequestError } from '@services/cms/cmsService'
import { StrapiErrorResponse } from '../types/strapiResponse'

export interface RequestBody {
  body: StrapiErrorResponse | string
  status: number
}

export function errorHandler({ body, status }: RequestBody): CmsRequestError {
  if (typeof body === 'string') {
    // Server error
    const requestError: CmsRequestError = {
      message: body,
      status: status,
      success: false,
    }
    return requestError
  }

  //Strapi error
  const requestError: CmsRequestError = {
    message: body.error.name + ' ' + body.error.message,
    status: body.error.status,
    success: false,
  }
  return requestError
}
