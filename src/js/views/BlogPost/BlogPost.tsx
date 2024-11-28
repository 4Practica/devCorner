import styles from './BlogPost.module.css'
import React from 'react'
import { Article } from './components'
import { useBlogPost } from './BlogPost.hooks'
import { useParams } from 'react-router-dom'

const BlogPost: React.FC = () => {
  const params = useParams()
  const { blogPost } = useBlogPost(params.postSlug ? params.postSlug : '')
  if (blogPost === undefined) {
    return <div>Loading</div>
  }
  if (blogPost.title) {
    return (
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
    )
  }
}

export default BlogPost
