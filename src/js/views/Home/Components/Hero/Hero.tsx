import { useState } from 'react'
import styles from './Hero.module.css'

const {
  flex,
  section_direction,
  section_padding,
  vh_100,
  full_height,
  content_width,
  content_direction,
  gap_20,
  gap_10,
  form_direction,
  form_width,
  form_border,
  pl_2,
  pt_20,
  pb_20,
  visible,
  input,
  input_border,
  input_bg,
  button,
  second_text,
  first_text,
  arrow,
  arrow_text,
  image,
  email_icon,
  left_side,
} = styles

export const Hero = () => {
  const [data, setData] = useState({ email: '' })

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>): void => {
    //Aqui la funcion para el submit
    e.preventDefault()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = e.target
    setData({
      ...data,
      [name]: value,
    })
  }

  return (
    <section>
      <img
        src='https://res.cloudinary.com/bryancloudinary/image/upload/v1701837965/hero_wwa4xm.webp'
        className={`${image}`}
      />
      <div
        className={`${flex} ${section_direction} ${vh_100} ${section_padding} `}
      >
        <div
          className={`${content_width} ${flex} ${content_direction} ${gap_20} ${left_side}`}
        >
          <h1 className={`${first_text}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            quibusdam nostrum cumque
          </h1>
          <p className={`${second_text}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            voluptatum accusantium sint cum id molestias ducimus, reprehenderit
            illo quisquam dignissimos cumque veritatis quod omnis natus tempore
            libero eaque voluptatibus ullam!
          </p>

          <form
            onSubmit={handleSubmit}
            className={`${flex} ${form_width} ${form_direction} ${gap_20} `}
          >
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
                placeholder='Lorem ipsum'
                onChange={handleChange}
              />
            </div>
            <button type='submit' className={`${button}`}>
              Contact
            </button>
          </form>

          <div className={`${flex} ${pt_20} ${gap_10} ${pb_20}`}>
            <i className={`fa-solid fa-down-long ${arrow}`}></i>
            <h5 className={`${arrow_text}`}>Lorem ipsum</h5>
          </div>
        </div>
        <div className={`${content_width} ${full_height} ${visible}`}>
          <div>Contenedor de las imagenes</div>
        </div>
      </div>
    </section>
  )
}

export default Hero
