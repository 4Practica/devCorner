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
  pt_20,
  pb_20,
  visible,
  input_border,
  button,
  second_text,
  first_text,
  arrow,
} = styles

export const Hero = () => {
  const [data, setData] = useState({ email: '' })

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
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
    <section
      className={`${flex} ${section_direction} ${vh_100} ${section_padding}`}
    >
      <div
        className={`${content_width} ${flex} ${content_direction} ${gap_20}`}
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
          className={`${flex} ${form_direction} ${form_width} ${gap_20}`}
        >
          <div className={`${flex} `}>
            <label htmlFor='email'>cscascsc</label>
            <input
              className={`${input_border}`}
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
          <h5>Lorem ipsum</h5>
        </div>
      </div>
      <div className={`${content_width} ${full_height} ${visible}`}>
        Derecha
      </div>
    </section>
  )
}

export default Hero
