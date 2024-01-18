import { AppContainer } from '@common/layout'
import styles from './ErrorPage.module.css'
// import ErrorViewDog from '@assets/ErrorViewDog.webp'
import dots from '@assets/dots.svg'
import wave from '@assets/wave.svg'

const ErrorPage = () => {
  return (
    <AppContainer>
      <div className={`${styles.errorViewContainer}`}>
        <div className={`${styles.leftSide}`}>
          {/* <img src={ErrorViewDog} alt='' className={`${styles.leftImage}`} /> */}
        </div>

        <div className={`${styles.rightSide}`}>
          <img src={dots} alt='dots' className={`${styles.top}`} />

          <div className={`${styles.content}`}>
            <span className={`${styles.pill}`}>Error 404</span>

            <h2>Oh no! Error 404.</h2>
            <p>Something went wrong, so this page is broken.</p>

            <button type='button'>Go back to Homepage</button>
            <button type='button'>Try again</button>
          </div>

          <img src={wave} alt='wave' className={`${styles.bottom}`} />
        </div>
      </div>
    </AppContainer>
  )
}

export default ErrorPage
