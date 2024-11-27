export type TMethods = 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE'

export interface RequestParams<T=undefined> {
    path: string
    search?: string
    payload?: T
    authentication?: string
    method?: TMethods
}
export interface RequestResponse<T> {
    error: boolean;
    body: T;
    status: number;
}

export interface IHttpClient {
    url: string
    methods: TMethods[]
    serviceName: string
}