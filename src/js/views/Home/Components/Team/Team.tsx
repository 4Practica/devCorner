import { Chip } from '@common/components'
import { Header, Card } from './components'
import styles from './Team.module.css'

export interface Member {
  id: string
  image: string
  name: string
  position: string
  description: string
  github?: string
  linkedin?: string
  portfolio?: string
}

const Team = () => {
  const info: Member[] = [
    {
      id: crypto.randomUUID(),
      image: 'https://avatars.githubusercontent.com/u/30266134?v=4',
      name: 'Bryan García',
      position: 'Cuidador de gatos',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est facilis pariatur velit error eveniet possimus? Ex ipsum corporis vel officia necessitatibus excepturi aperiam esse reiciendis, praesentium distinctio consectetur perspiciatis accusantium.',
      github: 'https://github.com/bryanstgarcia',
      linkedin: 'https://www.linkedin.com/in/bryanstgarcia/',
      portfolio: 'http://bryanstgarcia.com',
    },
    {
      id: crypto.randomUUID(),
      image: 'https://avatars.githubusercontent.com/u/97990022?v=4',
      name: 'José Velásquez',
      position: 'Chambaless',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est facilis pariatur velit error eveniet possimus? Ex ipsum corporis vel officia necessitatibus excepturi aperiam esse reiciendis, praesentium distinctio consectetur perspiciatis accusantium.',
      github: 'https://github.com/Jdvd01',
      linkedin: 'https://www.linkedin.com/in/jdvd01/',
      portfolio: 'https://portfolio-jdvd01.vercel.app/',
    },
  ]

  return (
    <div className={`${styles.container}`}>
      <Chip variant='secondary' shape='rounded' proportion='md' bold={true}>
        TEAM
      </Chip>

      <Header />

      <hr className={`${styles.line}`} />

      <div className={`${styles.cards_container}`}>
        {info.map((item) => (
          <>
            <Card member={item} key={item.id} />
          </>
        ))}
      </div>
    </div>
  )
}

export default Team
