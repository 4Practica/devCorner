import { Chip } from '@common/components'
import styles from './Team.module.css'
import { BG_STYLES_CLASSES, COLOR_STYLES_CLASSES } from '@common/utils/enums'
import { Card, Header } from './components'

const Team = () => {
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
      <Card />
    </div>
  )
}

export default Team
