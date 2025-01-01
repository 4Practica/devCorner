import styles from './Intro.module.css'
import { Chip } from '@common/components/Chip'
import { SearchBar } from '..'
import React, { SetStateAction } from 'react'

interface IntroProps {
  search: string
  setSearch: React.Dispatch<SetStateAction<string>>
  handleSearch: React.FormEventHandler<HTMLFormElement>
}
const Intro: React.FC<IntroProps> = ({ search, setSearch, handleSearch }) => {
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
      <SearchBar
        setSearch={setSearch}
        search={search}
        handleSearch={handleSearch}
      />
    </div>
  )
}

export default Intro
