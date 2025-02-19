// Define request response types
interface PaginationMetaData {
  page: number
  pageCount: number
  pageSize: number
  total: number
}

export interface StrapiMetaData {
  pagination: PaginationMetaData
}
export interface StrapiResponse<T> {
  data: T
  meta: StrapiMetaData | Record<never, never> // REcord<never, never> Representa un objeto vacío que no tiene llaves ni valores = {}
}

interface StrapiErrorDetails {
  status: number
  name: string
  message: string
  details: object
}

export interface StrapiErrorResponse {
  data: null
  error: StrapiErrorDetails
}
