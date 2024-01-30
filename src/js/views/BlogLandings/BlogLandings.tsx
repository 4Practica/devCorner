import { PostCard } from '@common/components'
import styles from './BlogLandings.module.css'
import { Intro } from './components'
import { AppContainer } from '@common/layout'
import React from 'react'
import { BG_STYLES_CLASSES } from '@common/utils/enums'
import { ArrowRightIcon } from '@common/icons'

const BlogLandings = () => {
  return (
    <React.Fragment>
      <AppContainer>
        <div className={`${styles['blog-main-box']}`}>
          <div className={`bg-light padding-x padding-y `}>
            <Intro />
          </div>
        </div>
      </AppContainer>
      <AppContainer bgColor={BG_STYLES_CLASSES.DARK} elementType='section'>
        <div className={`padding-x padding-y ${styles['blog-posts']}`}>
          {['0', '0', '0', '0', '0', '0', '0', '0'].map((_, index) => {
            return (
              <PostCard key={index}>
                <PostCard.Image
                  src='https://images.pexels.com/photos/6803545/pexels-photo-6803545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  alt='Chilling'
                  position='bottom right'
                />
                <PostCard.Tags
                  labels={[
                    {
                      id: crypto.randomUUID(),
                      label: 'FRONTEND',
                      value: 'frontend',
                    },
                  ]}
                />
                <PostCard.Author>John Doe • 19 Jan 2022</PostCard.Author>
                <PostCard.Title headerType={'h3'}>
                  A small business is only as good as its tools and it is
                  totally true.
                </PostCard.Title>
                <PostCard.Description>
                  We've all experienced the chaos of multiple spreadsheets,
                  tracking and insight tools, and scrambling for the right data
                  at the right time.
                </PostCard.Description>
                <PostCard.CTA to={'/home'}>
                  {'Read post'}
                  <ArrowRightIcon />
                </PostCard.CTA>
              </PostCard>
            )
          })}
        </div>
      </AppContainer>
    </React.Fragment>
  )
}

export default BlogLandings
