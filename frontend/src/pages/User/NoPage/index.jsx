import React, { useContext } from 'react'
import { LanguageContext } from '../../../context/LanguageContext'
import { Link } from 'react-router'

function NoPage() {
  const { lang } = useContext(LanguageContext)
  const translations = {
    az: { notFound: "Təəssüf ki, bu səhifə ya köçürülüb, ya da mövcud deyil.", home: "Əsas səhifəyə qayıt" },
    en: { notFound: "Sorry, this page has either moved or doesn't exist", home: "Return to homepage" },
    ru: { notFound: "Извините, эта страница либо перемещена, либо не существует.", home: "Вернуться на главную страницу" }
  }
  return (
    <div style={{ height: "70vh", width: "100%", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "white",flexDirection:"column",gap:"10px" }}>

      <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <h1 style={{ fontSize: "200px" }}>4</h1>
        <span><img src="/images/cracked.png" alt="" /></span>
        <h1 style={{ fontSize: "200px" }}>4</h1>
      </div>
      <h2>{translations[lang].notFound}</h2>
      <Link to={"/"}><button className='btn btn-warning'>{translations[lang].home}</button></Link>
    </div>
  )
}

export default NoPage
