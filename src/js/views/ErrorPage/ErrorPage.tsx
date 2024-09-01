import { AppContainer } from '@common/layout'
import styles from './ErrorPage.module.css'
import dots from '@assets/dots.svg'
import wave from '@assets/wave.svg'
import { Link, useLocation } from 'react-router-dom'
import { Chip } from '@common/components'
import { BG_STYLES_CLASSES } from '@common/utils/enums'

const ErrorPage = () => {
  const location = useLocation()
  console.log(location)
  return (
    <AppContainer bgColor={BG_STYLES_CLASSES.DARK}>
      <div className={`${styles.errorViewContainer}`}>
        <div className={`${styles.dotsTopDeco}`}>
          <img src={dots} alt='dots' width={"150"} height={"110"} />
        </div>
        <div className={`${styles.leftSide}`}>
          <picture>
            <source
              srcSet={
                'https://res.cloudinary.com/bryancloudinary/image/upload/v1725157271/errorCode404.webp'
              }
              width={320}
              height={180}
              media={'(min-width: 720px)'}
            />
            <img
              src={
                'https://res.cloudinary.com/bryancloudinary/image/upload/v1725157271/errorCode404.webp'
              }
              width={320}
              height={180}
            />
          </picture>
        </div>
        <div className={`${styles.rightSide}`}>
          <div className={`${styles.content}`}>
            <Chip chipStyle='secondary' proportion='sm' bold={true}>
              ERROR 404
            </Chip>
            <h1 className={`${styles.heading}`}>Oh no! Error 404.</h1>
            <p className={`${styles.paragraph}`}>
              Something went wrong, so this page is broken.
            </p>
            <div className={`${styles.buttonContainer}`}>
              <Link to='/' className={`${styles.leftButton}`}>
                Go back to homepage
              </Link>
              <Link to={location.pathname} className={`${styles.rightButton}`}>
                Try again
              </Link>
            </div>
          </div>
        </div>
        <div className={`${styles.dotsBottomDeco}`}>
          <img src={wave} alt='wave' width={"150"} height={"110"} className={`${styles.bottom}`} />
        </div>
      </div>
    </AppContainer>
  )
}

export default ErrorPage
