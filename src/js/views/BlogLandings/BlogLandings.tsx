import styles from './BlogLandings.module.css'
import { Intro } from './components'
import { AppContainer } from '@common/layout'
import React, { useState } from 'react'
import { BG_STYLES_CLASSES } from '@common/utils/enums'
import LoadState from './components/LoadState'
import SearchResult, { BlogPost } from './components/SearchResults/SearchResults'
const data: BlogPost[] = [
    {
      imgUrl: "string",
      title: "string",
      labels: [
        {
          id: crypto.randomUUID(),
          label: 'FRONTEND',
          value: 'frontend',
        },
        {
          id: crypto.randomUUID(),
          label: 'BACKEND',
          value: 'frontend',
        },
      ],
      description: "string",
      path: "string",
  }, {
    imgUrl: "string",
    title: "string",
    labels: [
      {
        id: crypto.randomUUID(),
        label: 'FRONTEND',
        value: 'frontend',
      },
      {
        id: crypto.randomUUID(),
        label: 'BACKEND',
        value: 'frontend',
      },
    ],
    description: "string",
    path: "string",
  }, {
  imgUrl: "string",
  title: "string",
  labels: [
    {
      id: crypto.randomUUID(),
      label: 'FRONTEND',
      value: 'frontend',
    },
    {
      id: crypto.randomUUID(),
      label: 'BACKEND',
      value: 'frontend',
    },
    {
      id: crypto.randomUUID(),
      label: 'BACKEND',
      value: 'frontend',
    },
    {
      id: crypto.randomUUID(),
      label: 'BACKEND',
      value: 'frontend',
    },
  ],
  description: "string",
  path: "string",
  }
]
const BlogLandings = () => {
  const [ search, setSearch ] = useState<string>("")
  const [ loading ] = useState<boolean>(false)
  return (
    <React.Fragment>
      <AppContainer elementType='div' bgColor={BG_STYLES_CLASSES.DARK}>
        <div className={`${styles['blog-main-box']}`}>
          <div className={`padding-x padding-y `}>
            <Intro search={search} handleSearch={setSearch}/>
          </div>
        </div>
      </AppContainer>
      <AppContainer bgColor={BG_STYLES_CLASSES.LIGHT} elementType='section'>
        <div className={`padding-x padding-y ${styles['blog-posts']}`}>
          {
            loading ? <LoadState /> : <SearchResult results={data} />
          }
        </div>
      </AppContainer>
    </React.Fragment>
  )
}

export default BlogLandings
