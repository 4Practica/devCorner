import { Chip } from '@common/components/Chip'
import React from 'react'
import styles from './Tags.module.css'
import { usePostcard } from '../../PostCard.hooks'
export type Label = {
  id: string
  value: string
  label: string
}
export interface TagsProps {
  labels: Label[]
}
export const Tags: React.FC<TagsProps> = ({ labels }) => {
  usePostcard('Tags')
  return (
    <div className={` ${styles['tags-box']}`}>
      {labels.map((item) => {
        return (
          <React.Fragment>
            <Chip key={item.id} variant='primary' proportion='sm' bold={false}>
              {item.label}
            </Chip>
          </React.Fragment>
        )
      })}
    </div>
  )
}
