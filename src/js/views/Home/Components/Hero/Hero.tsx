import { useState } from 'react'
import styles from './Hero.module.css'
import { Button } from '@common/components/Button'

export const Hero = () => {
  const [data, setData] = useState({ email: '' })

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault()
    //Aqui la funcion para el submit
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = e.target
    setData({
      ...data,
      [name]: value,
    })
  }

  return (
    <section id='hero-cta' className={`${styles.hero_container}`}>
      <img
        src='https://res.cloudinary.com/bryancloudinary/image/upload/v1701837965/hero_wwa4xm.webp'
        className={`${styles.hero_bg_image}`}
      />
      <div className={`${styles.hero_content}`}>
        <div className={`${styles.left_side}`}>
          <div className={`${styles.left_side__top}`}>
            <div className={`${styles.hero_text}`}>
              <h1 className={`${styles.hero_text__title}`}>
                Explore the dynamics of software development
              </h1>
              <p className={`${styles.hero_text__subtitle}`}>
                Subscribe now to explore, learn and grow with each post
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <input
                className={`${styles.form_input}`}
                type='text'
                name='email'
                id='email'
                value={data.email}
                placeholder='Email'
                onChange={handleChange}
              />
              <Button
                type={'submit'}
                variant='primary'
                proportion={'md'}
                customClasses={`${styles.form_button}`}
              >
                Subscribe
              </Button>
            </form>
          </div>

          <div className={`${styles.left_side__bottom}`}>
            <i className={`fa-solid fa-down-long ${styles.arrow}`}></i>
            <h5 className={``}>Explore Categories</h5>
          </div>
        </div>
        <div className={`${styles.right_side}`}>
          <div className={``}>
            <img
              src='https://res.cloudinary.com/bryancloudinary/image/upload/v1701837965/hero_wwa4xm.webp'
              className={``}
            />
            <img
              src='https://res.cloudinary.com/bryancloudinary/image/upload/v1701837965/hero_wwa4xm.webp'
              className={``}
            />
            <img
              src='https://res.cloudinary.com/bryancloudinary/image/upload/v1701837965/hero_wwa4xm.webp'
              className={``}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
