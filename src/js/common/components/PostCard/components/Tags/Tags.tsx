import { Chip } from '@common/components/Chip'
import React from 'react'
import styles from './Tags.module.css'
import { usePostcard } from '../../PostCard.hooks'
import { Tag } from '@common/utils/types/tag'

export interface TagsProps {
  tags: Tag[]
}
export const Tags: React.FC<TagsProps> = ({ tags }) => {
  usePostcard('Tags')
  return (
    <div className={` ${styles['tags-box']}`}>
      {tags.map((item) => {
        return (
          <Chip key={item.id} variant='primary' proportion='sm' bold={false}>
            {item.name}
          </Chip>
        )
      })}
    </div>
  )
}
