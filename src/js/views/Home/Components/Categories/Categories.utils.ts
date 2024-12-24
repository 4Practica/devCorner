import { ChieldIcon, GearIcon, ImageIcon } from '@common/icons'
import { IconProps } from '@common/icons/icons.utils'
import React from 'react'

interface Category {
  title: string
  description: string
  Icon: React.ComponentType<IconProps>
}

export const categories: Category[] = [
  {
    title: 'Frontend frameworks',
    description:
      'Stay ahead with the latest in frontend technology! From React to Vue, learn what powers interactive, sleek, and fast user experiences.',
    Icon: ImageIcon,
  },
  {
    title: 'Backend Essentials',
    description:
      "Explore the foundations that support every application. Whether it's databases, servers, or APIs, this category covers the essentials of building robust backends.",
    Icon: GearIcon,
  },
  {
    title: 'DevOps',
    description:
      'Automate, deploy, and monitor. Discover tools and practices for seamless integration and delivery, ensuring stability and efficiency in your development cycle.',
    Icon: ChieldIcon,
  },
]
