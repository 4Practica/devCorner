import styles from './BlogLandings.module.css'
import { Intro } from './components'
import { AppContainer } from '@common/layout'
import React, { useState } from 'react'
import { BG_STYLES_CLASSES } from '@common/utils/enums'
import LoadState from './components/LoadState'
import SearchResult from './components/SearchResults/SearchResults'
import { useBlogs } from './BlogLandings.hooks'

const BlogLandings = () => {
  const [search, setSearch] = useState<string>('')
  const { blogPosts, handleFilter } = useBlogs()

  function handleSearch(e: React.FormEvent) {
    e.preventDefault()
    handleFilter(search)
  }

  return (
    <React.Fragment>
      <AppContainer padding elementType='div' bgColor={BG_STYLES_CLASSES.DARK}>
        <Intro
          search={search}
          handleSearch={handleSearch}
          setSearch={setSearch}
        />
      </AppContainer>
      <AppContainer
        padding
        bgColor={BG_STYLES_CLASSES.LIGHT}
        elementType='section'
      >
        <div className={`${styles['blog-posts']}`}>
          {blogPosts ?
            <SearchResult results={blogPosts} />
          : <LoadState />}
        </div>
      </AppContainer>
    </React.Fragment>
  )
}

export default BlogLandings
