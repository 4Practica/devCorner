import styles from './BlogPost.module.css'
/* import remarkGfm from 'remark-gfm'; // For GitHub Flavored Markdown
import rehypePrism from 'rehype-prism'; */
//import dummyMd from './blogPost.placeholder.md?raw'
//import dummyPost from './ecommerce.placeholder.md?raw'
import dummyPostTS from './typescript.placeholder.md?raw'
import React from 'react'
import { dummyData } from './components/Article/Article.utils'
import { Article, RenderMD } from './components'

const BlogPost: React.FC = () => {
  const { title, shortDescription, author, date, img, tags } = dummyData

  return (
    <main className={styles[`blog-post`]}>
      <Article
        title={title}
        date={date}
        author={author}
        shortDescription={shortDescription}
        tags={tags}
        img={img}
      >
        <RenderMD MD={dummyPostTS} />
      </Article>
    </main>
  )
}

export default BlogPost
