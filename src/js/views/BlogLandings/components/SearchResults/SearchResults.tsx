import { PostCard } from '@common/components/PostCard'
import { ArrowRightIcon } from '@common/icons'
import { BlogPost } from '@common/utils/types/blogPost'
import React from 'react'

interface SearchResultProps {
  results: BlogPost[]
}

const SearchResult: React.FC<SearchResultProps> = ({ results }) => {
  return (
    <React.Fragment>
      {results.map((blogPost, index) => {
        return (
          <PostCard key={index}>
            <PostCard.Image
              src={blogPost.img.src.lg}
              alt={blogPost.img.alt}
              position='bottom right'
            />
            <PostCard.Tags tags={blogPost.tags} />
            <PostCard.Author>{blogPost.author.name} • {blogPost.date}</PostCard.Author>
            <PostCard.Title headerType={'h3'}>
              {blogPost.title}
            </PostCard.Title>
            <PostCard.Description>
              {blogPost.shortDescription}
            </PostCard.Description>
            <PostCard.CTA to={"/blog/" + blogPost.slug}>
              {'Read post'}
              <ArrowRightIcon />
            </PostCard.CTA>
          </PostCard>
        )
      })}
    </React.Fragment>
  )
}
export default SearchResult
