import React from 'react'
import Headbar from './Headbar'
import NavbarHead from './NavbarHead'
import FooterNav from './FooterNav'
import Image from './Image'
import Product from './Product'

export default function NewArrivals() {
  return (
    <div>
        <Headbar/>
        <NavbarHead/>
        <Image name="New Arrivals" src="https://cdn.shopify.com/s/files/1/0245/6825/files/thin-banner-004_2048x2048.jpg?v=1540338229"/>
        <Product/>
        <FooterNav/>

    </div>
  )
}
