import React from 'react'
import Headbar from './Headbar'
import NavbarHead from './NavbarHead'
import Image from './Image'
import FooterNav from './FooterNav'
import NewsLetter from './NewsLetter'

export default function AboutUs() {
  return (
    <div>
        <Headbar/>
        <NavbarHead/>
        <Image name="About Us" src="https://img.freepik.com/premium-photo/stylish-happy-girl-shopping-portrait-modern-woman-with-shop-bag-laughing-smiling-satisfied_1258-87356.jpg?size=626&ext=jpg"/>
        <div style={{dispaly:"flex",flexDirection:"row",marginLeft:"150px",marginRight:"150px",marginTop:"20px"}}>
            <p>Our story began in 2001 in a small studio in the middle of nowhere. With only one desk and next to no free time, our brand was born. Our passion for unique design and collaboration brought our vision, and products, to life.</p><br/>
            <p>
            Our products bring together the finest materials and stunning design to create something very special. We believe in quality, care, and creating unique products that everyone can enjoy. Colorful, creative, and inspired by what we see everyday, each product represents what we love about the world we live in. We hope they’ll inspire you too.
            </p><br/><br/><br/><br/><br/><br/>
        </div>
        <NewsLetter/>
        <FooterNav/>
       


    </div>
  )
}
