import { useState } from 'react'
import styles from './Hero.module.css'
import { Button } from '@common/components'

const {
  vh_100,
  gap_20_px,
  gap_10_px,
  pl_2,
  pt_left_side,
  pr_10_per,
  flex,
  column,
  hero_container,
  hero_content,
  section_direction,
  section_padding,
  content_width,
  content_direction,
  content_alignment,
  content_height,
  second_text,
  first_text,
  form,
  form_border,
  email_icon,
  input,
  input_border,
  input_bg,
  arrow,
  arrow_text,
  pb_arrow,
  visible,
  image,
  left_image,
  middle_image,
  right_image,
  right_side,
} = styles

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
    <section id='hero-cta' className={`${vh_100} ${hero_container}`}>
      <img
        src='https://res.cloudinary.com/bryancloudinary/image/upload/v1701837965/hero_wwa4xm.webp'
        className={`${image}`}
      />
      <div className={`${flex} ${hero_content} ${section_direction} ${section_padding} `}>
        <div
          className={`${content_width} ${flex} ${content_direction} ${gap_20_px} ${content_alignment} ${content_height} ${pr_10_per}`}
        >
          <div className={`${flex} ${column} ${gap_20_px} ${pt_left_side}`}>
            <h1 className={`${first_text}`}>
              Explore the dynamics of software development{' '}
            </h1>
            <p className={`${second_text}`}>
              Subscribe now to explore, learn and grow with each post
            </p>
            <form onSubmit={handleSubmit} className={`${form} ${gap_20_px} `}>
              <div className={`${flex} ${form_border} ${pl_2}`}>
                <label htmlFor='email'>
                  <i className={`fa-regular fa-envelope ${email_icon}`}></i>
                </label>
                <input
                  className={`${input} ${input_border} ${input_bg}`}
                  type='text'
                  name='email'
                  id='email'
                  value={data.email}
                  placeholder='Email'
                  onChange={handleChange}
                />
              </div>
              <Button
                type={'submit'}
                variant='primary'
                proportion={'md'}
              >
                Subscribe
              </Button>
            </form>
          </div>

          <div className={`${flex} ${gap_10_px} ${pb_arrow}`}>
            <i className={`fa-solid fa-down-long ${arrow}`}></i>
            <h5 className={`${arrow_text}`}>Explore Categories</h5>
          </div>
        </div>
        <div className={`${content_width} ${visible} ${content_height}`}>
          <div className={`${right_side}`}>
            <img
              src='https://res.cloudinary.com/bryancloudinary/image/upload/v1701837965/hero_wwa4xm.webp'
              className={`${left_image}`}
            />
            <img
              src='https://res.cloudinary.com/bryancloudinary/image/upload/v1701837965/hero_wwa4xm.webp'
              className={`${middle_image}`}
            />
            <img
              src='https://res.cloudinary.com/bryancloudinary/image/upload/v1701837965/hero_wwa4xm.webp'
              className={`${right_image}`}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
