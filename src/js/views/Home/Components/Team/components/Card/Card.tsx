import { CardImage } from './CardImage'
import styles from './Card.module.css'
import { CardInfo } from './CardInfo'
import { Member } from '../../Team'

interface CardProps {
  member: Member
}

export const Card: React.FC<CardProps> = ({ member }) => {
  return (
    <div className={`${styles.card}`}>
      <CardImage image={member.image} shape='square' shadow={false} />
      <CardInfo
        name={member.name}
        position={member.position}
        description={member.description}
        github={member.github}
        linkedin={member.linkedin}
        portfolio={member.portfolio}
      />
    </div>
  )
}
