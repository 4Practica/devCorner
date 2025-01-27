import styles from './BlogPost.module.css'
import React from 'react'
import { Article, ArticleSkeleton } from './components'
import { useBlogPost } from './BlogPost.hooks'
import { useNavigate, useParams } from 'react-router-dom'
import { useScrollToTop } from '@common/utils/hooks/useScrollToTop'
import { MetaData } from '@common/layout/MetaData/MetaData'

const BlogPost: React.FC = () => {
  const params = useParams()
  const navigate = useNavigate()
  const { blogPost } = useBlogPost(params.postSlug ?? '', navigate)
  useScrollToTop()
  if (blogPost === undefined) {
    return (
      <main className={styles[`blog-post`]}>
        <ArticleSkeleton />
      </main>
    )
  }

  if (blogPost.title) {
    return (
      <React.Fragment>
        {blogPost.meta ?
          <MetaData
            meta={blogPost.meta.meta}
            og={blogPost.meta.og}
            tw={blogPost.meta.tw}
          />
        : null}
        <main className={styles[`blog-post`]}>
          <Article
            title={blogPost.title}
            date={blogPost.date}
            author={blogPost.author}
            shortDescription={blogPost.shortDescription}
            tags={blogPost.tags}
            img={blogPost.img}
            blogMd={blogPost.blogMd}
            id={blogPost.id}
            slug={blogPost.slug}
          />
        </main>
      </React.Fragment>
    )
  }
}

export default BlogPost
