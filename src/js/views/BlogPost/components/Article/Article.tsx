import React from 'react'
import styles from './Article.module.css'
import { BlogPostArticle } from './Article.utils'
import { Chip } from '@common/components/Chip'
import { AppContainer } from '@common/layout'
import { BG_STYLES_CLASSES } from '@common/utils/enums'
interface ArticleProps extends BlogPostArticle {
  children: React.ReactNode
}
export const Article: React.FC<ArticleProps> = ({
  title,
  author,
  shortDescription,
  img,
  date,
  tags,
  children,
}) => {
  const tagChips = tags.map((data) => (
    <Chip proportion={'sm'} variant='primary'>
      {data}
    </Chip>
  ))

  return (
    <article className={styles[`article-box`]}>
      <AppContainer
        className={styles['article__intro']}
        elementType='div'
        bgColor={BG_STYLES_CLASSES.DARK}
      >
        <div className={styles[`article__intro--creative`]}>
          <address className={styles[``]}>
            <a href={author.webAddress} target='_blank'>
              {author.name}
            </a>
          </address>{' '}
          <span>•</span>{' '}
          <time className={styles[``]} dateTime={date}>
            {date}
          </time>
        </div>
        <h1 className={styles[`article__intro--title`]}>{title}</h1>
        <p className={styles[`article__intro--desc`]}>{shortDescription}</p>
        <div className={styles[`article__intro--tags`]}>{tagChips}</div>
        <div className={styles[`article__intro--img`]}>
          <picture className={styles[``]}>
            <source
              srcSet={img.src.lg}
              media='(min-width: 1020px)'
              width='920'
              height='520'
            />
            <source
              srcSet={img.src.md}
              media='(min-width: 720px)'
              width='690'
              height='370'
            />
            <source
              srcSet={img.src.sm}
              media='(min-width:520px)'
              width='490'
              height='270'
            />
            <img
              loading={'eager'}
              src={img.src.xs}
              alt={img.alt}
              width='320'
              height='180'
            />
          </picture>
        </div>
      </AppContainer>
      <AppContainer
        className={styles['article__content']}
        bgColor={BG_STYLES_CLASSES.LIGHT}
        elementType='div'
      >
        {children}
      </AppContainer>
    </article>
  )
}
