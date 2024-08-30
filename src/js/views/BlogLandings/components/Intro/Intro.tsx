import { BG_STYLES_CLASSES, COLOR_STYLES_CLASSES } from '@common/utils/enums'
import styles from './Intro.module.css'
import { Chip } from '@common/components'
import { SearchBar } from '..'
import React, { SetStateAction } from 'react'

interface IntroProps {
  search: string,
  handleSearch: React.Dispatch<SetStateAction<string>>
}
const Intro: React.FC<IntroProps> = ({ search, handleSearch }) => {
  return (
    <div className={styles.intro}>
      <Chip
        bgColor={BG_STYLES_CLASSES.PRIMARY}
        fontColor={COLOR_STYLES_CLASSES.LIGHT}
        shape='rounded'
        proportion='sm'
        bold={true}
      >
        BLOG
      </Chip>
      <h2>
        Our mission is to make knowledge and news accessible for everyone.
      </h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit esse
        voluptas accusamus distinctio necessitatibus quae sunt voluptates
        deleniti
      </p>
      <SearchBar handleSearch={handleSearch} search={search}/>
    </div>
  )
}

export default Intro
