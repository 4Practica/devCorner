import React from 'react'
import styles from './ArticleSkeleton.module.css'
import { AppContainer } from '@common/layout'
import { BG_STYLES_CLASSES } from '@common/utils/enums'

interface ArticleSkeletonProps {}

export const ArticleSkeleton: React.FC<ArticleSkeletonProps> = () => {
  return (
    <article className={styles[`article-skeleton-box`]}>
      <AppContainer
        className={styles['article-skeleton__intro']}
        elementType='header'
        bgColor={BG_STYLES_CLASSES.DARK}
      >
        <div
          className={`${styles[`article-skeleton__intro--creative`]} ${
            styles[`animate-beat`]
          }`}
        ></div>
        <div
          className={`${styles[`article-skeleton__intro--title`]} ${
            styles[`animate-beat`]
          }`}
        ></div>
        <div
          className={`${styles[`article-skeleton__intro--title`]} ${
            styles[`animate-beat`]
          }`}
        ></div>
        <div
          className={`${styles[`article-skeleton__intro--desc`]} ${
            styles[`animate-beat`]
          }`}
        ></div>
        <div
          className={`${styles[`article-skeleton__intro--tags`]} ${
            styles[`animate-beat`]
          }`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${styles[`article-skeleton__intro--img`]}`}>
          <div className={`${styles[`animate-beat`]}`}></div>
        </div>
      </AppContainer>
      <AppContainer
        className={styles['article-skeleton__content']}
        bgColor={BG_STYLES_CLASSES.LIGHT}
        elementType='div'
      >
        <div
          className={`${styles[`article-skeleton__data`]} ${
            styles[`animate-beat`]
          }`}
        ></div>
        <div
          className={`${styles[`article-skeleton__data`]} ${
            styles[`animate-beat`]
          }`}
        ></div>
        <div
          className={`${styles[`article-skeleton__data`]} ${
            styles[`animate-beat`]
          }`}
        ></div>
        <div
          className={`${styles[`article-skeleton__data`]} ${
            styles[`animate-beat`]
          }`}
        ></div>
        <div
          className={`${styles[`article-skeleton__data`]} ${
            styles[`animate-beat`]
          }`}
        ></div>
      </AppContainer>
      <AppContainer
        className={`${styles['article-skeleton__footer']} ${styles['animate-beat']}`}
        bgColor={BG_STYLES_CLASSES.LIGHT}
        elementType='div'
      >
        <div className={`${styles['']}`}></div>
        <div className={`${styles['']}`}>
          <div className={`${styles['']}`}></div>
          <div className={`${styles['']}`}></div>
          <div className={`${styles['']}`}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </AppContainer>
    </article>
  )
}
