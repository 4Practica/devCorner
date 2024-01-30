import { Chip } from '@common/components'
import { BG_STYLES_CLASSES, COLOR_STYLES_CLASSES } from '@common/utils/enums'
import React from 'react'
import styles from './Tags.module.css'
import { usePostcard } from '../../PostCard.hooks'
type Label = {
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
          <Chip
            key={item.id}
            bgColor={BG_STYLES_CLASSES.PRIMARY}
            fontColor={COLOR_STYLES_CLASSES.LIGHT}
            proportion='sm'
            bold={false}
          >
            {item.label}
          </Chip>
        )
      })}
    </div>
  )
}
