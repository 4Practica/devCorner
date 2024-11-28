interface HttpClientErrorParams {
  message: string
  statusCode: number
}

export class HttpClientError extends Error {
  readonly statusCode: number
  readonly message: string

  constructor({ message, statusCode }: HttpClientErrorParams) {
    super()
    this.name = this.constructor.name
    this.message = message
    this.statusCode = statusCode
  }
}
