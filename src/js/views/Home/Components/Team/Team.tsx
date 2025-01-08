import { Chip } from '@common/components'
import { Header, Card, CardSkeleton } from './components'
import styles from './Team.module.css'
import { useAuthors } from './Team.hooks'

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
  const authors = useAuthors()
  const noAuthorsLength = 0

  return (
    <div className={`${styles.container}`}>
      <Chip
        variant='secondary-dark'
        shape='rounded'
        proportion='md'
        bold={true}
      >
        TEAM
      </Chip>

      <Header />

      <hr className={`${styles.line}`} />

      <div className={`${styles.cards_container}`}>
        {authors.length === noAuthorsLength ?
          <>
            <CardSkeleton />
            <CardSkeleton />
          </>
        : authors.map((item) => <Card member={item} key={item.id} />)}
      </div>
    </div>
  )
}

export default Team
