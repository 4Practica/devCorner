import AppContainer from '../AppContainer'
import { FooterLinks, FooterForm } from './components'
import styles from './Footer.module.css'

import { footerTopLinks, footerBottomLinks } from './footerData.ts'

const Footer = () => {
  return (
    <AppContainer>
      <div className={`${styles.footer_container}`}>
        <div className={`${styles.top_section}`}>
          <div className={`${styles.top_section_left}`}>
            <span>FLEX LOGO</span>
            <FooterLinks arrayOfLinks={footerTopLinks} />
          </div>
          <FooterForm />
        </div>

        <hr className={`${styles.line}`} />

        <div className={`${styles.bottom_section}`}>
          <p className={`${styles.paragraph}`}>2024 All rights reserved.</p>
          <FooterLinks arrayOfLinks={footerBottomLinks} />
        </div>
      </div>
    </AppContainer>
  )
}

export default Footer
