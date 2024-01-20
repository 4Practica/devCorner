import { NavigateFunction } from 'react-router-dom'
import React from 'react'

export const useButtonHandler = (
  navigate: NavigateFunction
): ((event: React.MouseEvent<HTMLButtonElement>) => void) => {
  return (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    const heroElement = document.querySelector('#hero-cta')
    if (heroElement === null) {
      navigate('/#hero-cta')
    } else {
      heroElement.scrollIntoView({ behavior: 'smooth' })
    }
    const inputElement: HTMLInputElement | null =
      document.querySelector('#email')
    if (inputElement !== null) {
      inputElement.focus({ preventScroll: true })
    }
  }
}
