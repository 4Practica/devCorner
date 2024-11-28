import { HttpClientError } from './errors'
import {
    IHttpClient,
    RequestParams,
    RequestResponse,
    TMethods,
} from './utils'

export class HttpClient implements IHttpClient {
    readonly url: string
    readonly methods: TMethods[]
    readonly serviceName: string
    readonly statusCode = {
        '200_OK': 200,
        '201_CREATED': 201,
        '204_NO_CONTENT': 204,
        '400_BAD_REQUEST': 400,
        '401_UNAUTHORIZED': 401,
        '403_FORBIDDEN': 403,
        '404_NOT_FOUND': 404,
        '405_METHOD_NOT_ALLOWED': 405,
        '429_TOO_MANY_REQUEST': 429,
        '500_INTERNAL_SERVER_ERROR': 500,
        '501_NOT_IMPLEMENTED': 501
        // If needed, add the rest of the available status code
    }
    constructor({ url, methods, serviceName }: IHttpClient) {
        this.url = url
        this.methods = methods
        this.serviceName = serviceName
    }

    verifyMethodAvailability(method:TMethods) {
        if (!this.methods.includes(method)) {
            throw new HttpClientError({
                message: `The ${this.serviceName} only accepts the following methods: ${this.methods.join(', ')} `,
                statusCode: 500,
            })
        }
    }

    async request<
        TResponse,
        TRequest = undefined,
    >({
        path,
        search,
        payload,
        authentication,
        method,
    }: RequestParams<TRequest>): Promise<RequestResponse<TResponse> | RequestResponse<string>> {
        const headers = new Headers({
            'Content-Type': 'application/json', // default for our use case
        })
        const requestBody = {}
        if (authentication) {
            headers.append('Authorization', authentication)
        }
        if (payload) {
            Object.assign(requestBody, { body: JSON.stringify(payload) })
        }
        const searchParams = search ? '/?' + search : ''
        try {
            const response = await fetch(this.url + path + searchParams, {
                ...requestBody,
                method,
                headers,
            })
            const body: TResponse = await response.json()
            return {
                error: false,
                status: response.status,
                body: body,
            }
        } catch (error) {
            console.error(this.serviceName + " error: ", error)
            return {
                error: true,
                status: 500,
                body: 'Server error'
            }
        }
    }

    async get<TResponse>({
        path,
        search,
        authentication,
    }: RequestParams): Promise<RequestResponse<TResponse> | RequestResponse<string>> {
        this.verifyMethodAvailability('GET')
        let result: RequestResponse<TResponse> | RequestResponse<string>;
        try {
            result = await this.request<TResponse>({
                path,
                search,
                authentication,
                method: 'GET',
            })
            return result
        } catch (error) {
            if (error instanceof HttpClientError) {
                return {
                    status: error.statusCode,
                    error: true,
                    body: error.message,
                }
            }
            return {
                status: 500,
                error: true,
                body: 'Something happened, try again.',
            }
        }
    }
}