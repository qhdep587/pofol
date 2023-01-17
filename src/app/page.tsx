import st from './page.module.css'
import Link from 'next/link'
import Top from './../pages/view/Top'

export default function Home() {
  return (
    <div className={st.background_box}>
      <img className={st.background_img} src="/images/gray.jpg" alt="background" />
      <div className={st.background_blur}>
        <Top />
        <div className={st.nav}>
          <div className={st.nav_item}>summary</div>&nbsp;&nbsp;&nbsp;&nbsp;
          <div className={st.nav_item}>skiils</div>&nbsp;&nbsp;&nbsp;&nbsp;
          <div className={st.nav_item}>experience</div>&nbsp;&nbsp;&nbsp;&nbsp;
          <div className={st.nav_item}>education</div>&nbsp;&nbsp;&nbsp;&nbsp;
          <div className={st.nav_item}>contact</div>&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
      </div>
    </div>
  )
}
