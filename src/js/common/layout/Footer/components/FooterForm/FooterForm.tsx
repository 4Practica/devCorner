import { Button } from '@common/components'
import styles from './Form.module.css'
import { useNewsletter } from '../../Footer.hooks'

const FooterForm = () => {
  const { handleChange, handleSubmit, data } = useNewsletter()

  return (
    <form onSubmit={handleSubmit} className={`${styles.top_section_right}`}>
      <input
        type='text'
        name='email'
        placeholder='Email'
        value={data.email}
        className={`${styles.input}`}
        aria-labelledby='Email'
        onChange={handleChange}
      />
      <Button
        type='submit'
        proportion='sm'
        children='Subscribe'
        customClasses={`${styles.form_button}`}
      />
    </form>
  )
}

export default FooterForm
