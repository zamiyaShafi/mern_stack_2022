import React from 'react'
import Image from './Image'
import Headbar from './Headbar'
import NavbarHead from './NavbarHead'
import FooterNav from './FooterNav'

export default function OurCollections() {
  return (
    <div>
        <Headbar/>
        <NavbarHead/>
        <Image name="Our Collections" src="https://cdn.shopify.com/s/files/1/0245/6825/files/mr-parker-hero-002_1944x.jpg?v=1624569454"/>
        <FooterNav/>

    </div>
  )
}
