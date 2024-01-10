import React from 'react'
import Headbar from './Headbar'
import NavbarHead from './NavbarHead'
import FooterNav from './FooterNav'
import Image from './Image'

export default function Tops() {
  return (
    <div>
        <Headbar/>
        <NavbarHead/>
        <Image name="Tops" src="https://cdn.shopify.com/s/files/1/0245/6825/files/thin-banner-005_2048x2048.jpg?v=1540338229"/>
        <FooterNav/>

    </div>
  )
}
