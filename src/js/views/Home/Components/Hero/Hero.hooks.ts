import { verifyEmail } from '@common/utils/validations/newsletter'
import {
  cmsClient,
  CmsRequestError,
  CmsRequestResult,
} from '@services/cms/cmsService'
import {
  Newsletter,
  NewsletterAttributes,
} from '@services/cms/strapi/types/newsletter'
import React, { useState } from 'react'
import {
  ModalContentInterface,
  ModalInfoInterface,
} from './Interfaces/ModalInterfaces'

export function useNewsletter() {
  const [data, setData] = useState<NewsletterAttributes>({ email: '' })
  const [modalInfo, setModalInfo] = useState<ModalInfoInterface>({
    open: false,
    isRequestSuccess: false,
  })

  const [modalContent, setModalContent] = useState<ModalContentInterface>({
    icon: '',
    content: '',
  })

  const handleModal = (
    requestInfo: CmsRequestResult<Newsletter> | CmsRequestError
  ) => {
    setModalInfo({
      open: true,
      isRequestSuccess: requestInfo.success,
    })

    setModalContent({
      icon: requestInfo.success ? 'CircleCheck' : 'CircleErrorDisclaimer',
      content:
        requestInfo.success ?
          `Welcome to our newsletter, feel free to navigate through our blogs. \nWe are happy you are here!`
        : `There was an error while subscribing to the newsletter, please try again later.`,
    })
  }

  const setDefaultModal = () => {
    setModalInfo({
      open: false,
      isRequestSuccess: false,
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = e.target
    setData({
      ...data,
      [name]: value,
    })
  }

  const handleSubmit = async (
    e: React.ChangeEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault()

    const validEmail = verifyEmail(data.email)

    if (data.email.trim() === '' || !validEmail) {
      return
    }

    const requestInfo = await cmsClient.subscribeToNewsletter({
      email: data.email,
    })
    handleModal(requestInfo)
    setData({ email: '' })
  }

  return {
    handleChange,
    handleSubmit,
    data,
    modalInfo,
    setModalInfo,
    setDefaultModal,
    modalContent,
  }
}
