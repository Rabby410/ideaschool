import React from 'react'
import Breadcrumbs from '../components/common/breadcrumb'
import ContactPage from '../components/contact/contactPage'

const Contact = () => {
  return (
    <>
    <Breadcrumbs pageTitle="Contact Us" parentPage="Home" parentPageUrl="/"/>
    <ContactPage/>
    </>
  )
}

export default Contact