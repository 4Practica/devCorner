import { BG_STYLES_CLASSES } from '@common/utils/enums/styles.ts'
import AppContainer from '../AppContainer'
import { FooterLinks, FooterForm } from './components'
import styles from './Footer.module.css'

import { footerTopLinks, footerBottomLinks } from './footerData.ts'

const Footer = () => {
  return (
    <AppContainer padding elementType='footer' bgColor={BG_STYLES_CLASSES.DARK}>
      <div className={`${styles.footer_container}`}>
        <div className={`${styles.top_section}`}>
          <div className={`${styles.top_section_left}`}>
            <span className={`${styles.logo}`}>DevCorner</span>
            <FooterLinks arrayOfLinks={footerTopLinks} />
          </div>
          <FooterForm />
        </div>

        <hr className={`${styles.line}`} />

        <div className={`${styles.bottom_section}`}>
          <p className={`${styles.paragraph}`}>2024 All rights reserved.</p>
          <FooterLinks arrayOfLinks={footerBottomLinks} showSitemap={true} />
        </div>
      </div>
    </AppContainer>
  )
}

export default Footer
