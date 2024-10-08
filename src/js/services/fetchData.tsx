/*
type TMethods = "POST" | "GET" | "PUT" | "PATCH" | "DELETE"

interface RequestParams {
    method: TMethods
    url: string
    payload: unknown
    authentication: string
}
interface RequestResponse {
    error?: boolean
    data?: unknown,
    request: unknown,
    status: number
}
export const requestData = ({
    method,
    url,
    payload,
    authentication
}:RequestParams): RequestResponse => {
    const data = [method, url, payload, authentication ]
    let request;
    try {
        request = fetch("")
    } catch (error) {
        console.log(error)
    }
    return {
        
    }
}
*/

// Create a contract for responses where we keep and structure
// to ensure the righht response to the request and be able to
// handle properly

// We can use Adapter pattern https://refactoring.guru/design-patterns/adapter in conjunction with other pattern
