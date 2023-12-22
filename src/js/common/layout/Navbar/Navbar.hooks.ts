import { useScreenSize } from '@common/utils/hooks'
import {
  BG_STYLES_CLASSES,
  COLOR_STYLES_CLASSES,
  RESPONSIVE_SIZE,
} from '@common/utils/enums'
import { useNavigate } from 'react-router-dom'
import React from 'react'

export type ButtonConfig = {
  color: COLOR_STYLES_CLASSES
  background: BG_STYLES_CLASSES
  proportion: 'button_small' | 'button_regular' | 'button_small'
}

export const useButtonConfig = () => {
  const screenSize = useScreenSize()

  const buttonConfig: ButtonConfig = {
    color:
      screenSize.width >= RESPONSIVE_SIZE.LG ?
        COLOR_STYLES_CLASSES.PRIMARY
      : COLOR_STYLES_CLASSES.LIGHT,
    background:
      screenSize.width >= RESPONSIVE_SIZE.LG ?
        BG_STYLES_CLASSES.LIGHT
      : BG_STYLES_CLASSES.PRIMARY,
    proportion:
      screenSize.width >= RESPONSIVE_SIZE.LG ?
        'button_regular'
      : 'button_small',
  }

  return buttonConfig
}

export const useButtonHandler = (
  event: React.MouseEvent<HTMLButtonElement>
) => {
  event.preventDefault()
  const navigate = useNavigate()
  const heroElement = document.querySelector('#hero-cta')
  if (heroElement === null) {
    navigate('/#hero-cta')
  } else {
    heroElement.scrollIntoView({ behavior: 'smooth' })
  }
  const inputElement: HTMLInputElement | null = document.querySelector('#email')
  if (inputElement !== null) {
    inputElement.focus({ preventScroll: true })
  }
}
