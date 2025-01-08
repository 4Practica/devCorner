import { CardImage } from './CardImage'
import styles from './Card.module.css'
import { CardInfo } from './CardInfo'
import { Author } from '@common/utils/types/author'

interface CardProps {
  member: Author
}

export const Card: React.FC<CardProps> = ({ member }) => {
  return (
    <div className={`${styles.card}`}>
      <CardImage
        image={member.avatar}
        shape='rounded'
        shadow={false}
        alt={`DevCorner author ${member.name}`}
      />
      <CardInfo
        name={member.name}
        position={member.role}
        description={member.description}
        github={member.githubUrl}
        linkedin={member.linkedinUrl}
        portfolio={member.webAddress}
      />
    </div>
  )
}
