'use client' // this is a client component

import st from './../../app/page.module.css'
import React, { useEffect, useState } from 'react'

const Top = () => {
  const [lang, setLang] = useState('Kor')
  const [title, setTitle] = useState('이대윤 포트폴리오')

  useEffect(() => {
    lang === 'Kor' ? setTitle('이대윤 포트폴리오') : setTitle("DAEYUN'S PORTFOLIO")
  }, [lang])

  return (
    <div className={st.header}>
      {title}
      <button
        className={st.headerBtn}
        onClick={() => {
          lang === 'Kor' ? setLang('Eng') : setLang('Kor')
        }}
      >
        {lang}
      </button>
    </div>
  )
}

export default Top
