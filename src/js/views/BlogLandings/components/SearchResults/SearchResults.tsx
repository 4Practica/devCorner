import { PostCard } from '@common/components/PostCard'
import { BlogPost } from '@common/utils/types/blogPost'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './SearchResults.module.css'
interface SearchResultProps {
  results: BlogPost[]
}

const SearchResult: React.FC<SearchResultProps> = ({ results }) => {
  return (
    <React.Fragment>
      {results.map((blogPost) => {
        return (
          <Link
            key={blogPost.slug}
            to={'/blog/' + blogPost.slug}
            className={styles['search-card-link']}
          >
            <PostCard>
              <PostCard.Image
                src={blogPost.img.src.lg}
                alt={blogPost.img.alt}
                position='bottom right'
              />
              <PostCard.Tags tags={blogPost.tags} />
              <PostCard.Author>
                {blogPost.author.name} • {blogPost.date}
              </PostCard.Author>
              <PostCard.Title headerType={'h3'}>
                {blogPost.title}
              </PostCard.Title>
              <PostCard.Description>
                {blogPost.shortDescription}
              </PostCard.Description>
            </PostCard>
          </Link>
        )
      })}
    </React.Fragment>
  )
}
export default SearchResult
