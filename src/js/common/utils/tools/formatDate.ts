interface DateFormat {
  year: 'numeric' | '2-digit' | undefined
  month: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow' | undefined
  day: 'numeric' | '2-digit' | undefined
  weekday: 'long' | 'short' | 'narrow' | undefined
}
export function formatDate(dateToFormat: string): string {
  const date = new Date(dateToFormat)
  const options: DateFormat = {
    weekday: undefined,
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  return date.toLocaleDateString('en-US', options)
}
