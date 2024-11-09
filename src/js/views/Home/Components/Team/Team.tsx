import { Chip } from '@common/components'
import { BG_STYLES_CLASSES, COLOR_STYLES_CLASSES } from '@common/utils/enums'
import { Header, Card } from './components'
import styles from './Team.module.css'

export interface Member {
  id: string
  image: string
  name: string
  position: string
  description: string
}

const Team = () => {
  const info: Member[] = [
    {
      id: crypto.randomUUID(),
      image: 'https://avatars.githubusercontent.com/u/30266134?v=4',
      name: 'Bryan García',
      position: 'Cuidador de gatos',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate sunt quae, aliquid velit',
    },
    {
      id: crypto.randomUUID(),
      image: 'https://avatars.githubusercontent.com/u/97990022?v=4',
      name: 'José Velásquez',
      position: 'Chambaless',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate sunt quae, aliquid velit',
    },
  ]

  return (
    <div className={`${styles.container}`}>
      <Chip
        bgColor={BG_STYLES_CLASSES.PRIMARY}
        fontColor={COLOR_STYLES_CLASSES.LIGHT}
        shape='rounded'
        proportion='md'
        bold={true}
      >
        Team
      </Chip>
      <Header />

      <div className={`${styles.cards_container}`}>
        {info.map((item) => (
          <Card member={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}

export default Team
