import styles from './CardInfo.module.css'
import { BrowserIcon, GithubIcon, LinkedinIcon } from '@common/icons'

interface CardInfoProps {
  name: string
  position: string
  description: string
  github?: string
  linkedin?: string
  portfolio?: string
}

export const CardInfo: React.FC<CardInfoProps> = ({
  name,
  position,
  description,
  github,
  linkedin,
  portfolio,
}) => {
  return (
    <div className={`${styles.card_info}`}>
      <h1 className={`${styles.card_name}`}>{name}</h1>
      <span className={`${styles.card_position}`}>{position}</span>
      <p className={`${styles.card_description}`}>{description}</p>

      <div className={`${styles.card_social}`}>
        {github ?
          <a href={github} rel='noopener noreferrer' target='_blank'>
            <GithubIcon color='white' width='40' height='40' />
          </a>
        : null}

        {linkedin ?
          <a href={linkedin} rel='noopener noreferrer' target='_blank'>
            <LinkedinIcon color='white' width='40' height='40' />
          </a>
        : null}

        {portfolio ?
          <a href={portfolio} rel='noopener noreferrer' target='_blank'>
            <BrowserIcon color='white' width='40' height='40' />
          </a>
        : null}
      </div>
    </div>
  )
}
