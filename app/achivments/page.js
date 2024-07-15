import React from 'react'
import Breadcrumbs from '../components/common/breadcrumb'
import AchivmentPage from '../components/achivments/achivmentPage'

const Achivments = () => {
  return (
    <>
    <Breadcrumbs pageTitle="Achivment" parentPage="Home" parentPageUrl="/"/>
    <AchivmentPage/>
    </>
  )
}

export default Achivments