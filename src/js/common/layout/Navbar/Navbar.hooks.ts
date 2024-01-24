import {
  BG_STYLES_CLASSES,
  COLOR_STYLES_CLASSES,
  RESPONSIVE_SIZE,
} from '@common/utils/enums'
import { NavigateFunction } from 'react-router-dom'
import React from 'react'
import { ScreenSize } from '@common/utils/types/ScreenSize'

export type ButtonConfig = {
  color: COLOR_STYLES_CLASSES
  background: BG_STYLES_CLASSES
  proportion: 'button_small' | 'button_regular' | 'button_small'
}

export const useButtonConfig = (screenSize: ScreenSize) => {
  const buttonConfig: ButtonConfig = {
    color: COLOR_STYLES_CLASSES.LIGHT,
    background: BG_STYLES_CLASSES.PRIMARY,
    proportion:
      screenSize.width >= RESPONSIVE_SIZE.LG ?
        'button_small'
      : 'button_regular',
  }

  return buttonConfig
}

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
