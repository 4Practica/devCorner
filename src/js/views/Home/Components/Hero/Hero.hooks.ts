import { verifyEmail } from '@common/utils/validations/newsletter'
import { cmsClient } from '@services/cms/cmsService'
import { NewsletterAttributes } from '@services/cms/strapi/types/newsletter'
import { useState } from 'react'

export function useNewsletter() {
  const [data, setData] = useState<NewsletterAttributes>({ email: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = e.target
    setData({
      ...data,
      [name]: value,
    })
  }

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault()

    const validEmail = verifyEmail(data.email)

    if (data.email.trim() === '' || !validEmail) {
      return
    }

    cmsClient.subscribeToNewsletter({ email: data.email })
    setData({ email: '' })
  }

  return { handleChange, handleSubmit, data }
}
