import { Button } from '@common/components'
import styles from './Form.module.css'

const FooterForm = () => {
  const handleSubmit = () => {
    // I'll do something here
  }

  return (
    <form onSubmit={handleSubmit} className={`${styles.top_section_right}`}>
      <input
        type='text'
        name='email'
        placeholder='Email'
        className={`${styles.input}`}
        aria-labelledby='Email'
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
