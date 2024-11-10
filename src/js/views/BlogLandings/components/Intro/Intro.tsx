import styles from './Intro.module.css'
import { Chip } from '@common/components/Chip'
import { SearchBar } from '..'
import React, { SetStateAction } from 'react'

interface IntroProps {
  search: string
  handleSearch: React.Dispatch<SetStateAction<string>>
}
const Intro: React.FC<IntroProps> = ({ search, handleSearch }) => {
  return (
    <div className={styles.intro}>
      <Chip shape='rounded' proportion='sm' variant='primary' bold>
        <h2>BLOG POSTS</h2>
      </Chip>
      <h1>Unlock Software Development Knowledge</h1>
      <p>
        Need help with a specific tech topic? Search our blog to find articles,
        best practices, and resources on software development.
      </p>
      <SearchBar handleSearch={handleSearch} search={search} />
    </div>
  )
}

export default Intro
