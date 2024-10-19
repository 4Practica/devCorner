import { useState } from 'react'
import styles from './Categories.module.css'
import { Button } from '@common/components/Button'
import { Chip } from '@common/components/Chip'
import { AppContainer } from '@common/layout'
import { BG_STYLES_CLASSES } from '@common/utils/enums'

const Categories = () => {
  return (
    <AppContainer elementType='section' bgColor={BG_STYLES_CLASSES.LIGHT}>
      <Chip variant='primary' proportion='sm'>Categories</Chip>
      <h2>Categories</h2>
    </AppContainer>
  )
}

export default Categories