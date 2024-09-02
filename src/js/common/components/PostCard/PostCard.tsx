import React from 'react'
import styles from './PostCard.module.css'
import Title, { TitleProps } from './components/Title/Title'
import { CTA, CTAProps } from './components/CTA/CTA'
import {
  Description,
  DescriptionProps,
} from './components/Description/Description'
import { Image, ImageProps } from './components/Image/Image'
import { Author, AuthorProps } from './components/Author/Author'
import { Tags, TagsProps } from './components/Tags/Tags'

interface PostCardProps {
  children: React.ReactNode
}

interface PostCardCompound extends React.FC<PostCardProps> {
  Image: React.FC<ImageProps>
  Tags: React.FC<TagsProps>
  Author: React.FC<AuthorProps>
  Title: React.FC<TitleProps>
  Description: React.FC<DescriptionProps>
  CTA: React.FC<CTAProps>
}

export const PostCardContext = React.createContext<boolean>(false)
export const PostCard: PostCardCompound = ({ children }) => {
  return (
    <PostCardContext.Provider value={true}>
      <div className={`${styles['card-box']}`}>{children}</div>
    </PostCardContext.Provider>
  )
}

PostCard.Image = Image
PostCard.Tags = Tags
PostCard.Author = Author
PostCard.Title = Title
PostCard.Description = Description
PostCard.CTA = CTA
