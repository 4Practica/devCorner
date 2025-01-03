import { Author } from '@common/utils/types/author'
import { cmsClient } from '@services/cms/cmsService'
import { useEffect, useState } from 'react'

export const useAuthors = () => {
  const [authors, setAuthors] = useState<Author[]>([])

  const handleAuthors = async () => {
    const result = await cmsClient.getAuthors()
    if (result.success === false) {
      /* Needs improvement. handle error properly */
      console.log('Something happened with authors request')
      return
    }
    setAuthors(result.data)
  }

  useEffect(() => {
    handleAuthors()
  }, [])

  return authors
}
