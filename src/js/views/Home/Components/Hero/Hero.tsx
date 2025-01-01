import { useState } from 'react'
import styles from './Hero.module.css'
import { Button } from '@common/components/Button'
import { Chip } from '@common/components'

const Hero = () => {
  const [data, setData] = useState({ email: '' })

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if (data.email.trim() === '') {
      return
    }
    //Aqui la funcion para el submit
    setData({ email: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = e.target
    setData({
      ...data,
      [name]: value,
    })
  }

  return (
    <div id='hero-cta' className={`${styles.hero_container}`}>
      <img
        src='https://res.cloudinary.com/bryancloudinary/image/upload/v1701837965/hero_wwa4xm.webp'
        alt='hero background'
        className={`${styles.hero_bg_image}`}
      />
      <div className={`${styles.hero_content}`}>
        <div className={`${styles.hero_top}`}>
          <div className={`${styles.hero_left}`}>
            <div className={`${styles.hero_text}`}>
              <Chip proportion='md' variant='secondary-dark' bold>
                WELCOME
              </Chip>
              <h1 className={`${styles.hero_text__title}`}>
                Explore the dynamics of software development
              </h1>
              <p className={`${styles.hero_text__subtitle}`}>
                Subscribe now to explore, learn and grow with each post
              </p>
            </div>
            <form onSubmit={handleSubmit} className={`${styles.form}`}>
              <input
                className={`${styles.form_input}`}
                type='email'
                name='email'
                id='email'
                value={data.email}
                placeholder='Email'
                onChange={handleChange}
                aria-labelledby='Email'
              />
              <Button
                type={'submit'}
                variant='primary'
                proportion={'sm'}
                customClasses={`${styles.form_button}`}
              >
                Subscribe
              </Button>
            </form>
          </div>

          <div className={`${styles.hero_right}`}>
            <div className={`${styles.images_container}`}>
              <img
                src='https://res.cloudinary.com/bryancloudinary/image/upload/v1701837965/hero_wwa4xm.webp'
                alt='hero right image'
                className={`${styles.left_image}`}
              />
              <img
                src='https://res.cloudinary.com/bryancloudinary/image/upload/v1701837965/hero_wwa4xm.webp'
                alt='hero right image'
                className={`${styles.middle_image}`}
              />
              <img
                src='https://res.cloudinary.com/bryancloudinary/image/upload/v1701837965/hero_wwa4xm.webp'
                alt='hero right image'
                className={`${styles.right_image}`}
              />
            </div>
          </div>

          <div className={`${styles.hero_bottom}`}>
            <i className={`fa-solid fa-down-long ${styles.arrow}`}></i>
            <h2 className={`${styles.hero_footer}`}>Explore Categories</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
