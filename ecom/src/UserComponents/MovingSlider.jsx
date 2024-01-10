import { Button } from '@mui/material'
import React from 'react'
import '../css/MovingSlider.css'
import { useNavigate } from 'react-router-dom'


export default function MovingSlider() {
  const nav=useNavigate()
  return (
    <div >
        <div id="carouselExampleCaptions" className={"carousel slide,carousel slide carousel-fade"}data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://cdn.shopify.com/s/files/1/0245/6825/files/Mr_Parker____hero_1_1850x.jpg?v=1651251185" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 style={{fontSize:"70px"}} >NEW RESORT COLLECTION</h5>
        {/* <p>Some representative placeholder content for the first slide.</p> */}
        <Button variant="contained" sx={{color:"white",backgroundColor:"black"}} onClick={()=>nav("/NewArrivals")}>Start Shopping</Button>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://cdn.shopify.com/s/files/1/0245/6825/files/mr_parker_fall_hero-1_1850x.jpg?v=1637270082" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 style={{fontSize:"70px"}}>AUTUMN DAZE</h5>
        <p style={{fontSize:"25px"}}>Dreamy Autumn Hues.</p>
        <Button variant="contained" sx={{color:"white",backgroundColor:"black"}} onClick={()=>nav("/NewArrivals")}>Shop New</Button>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://cdn.shopify.com/s/files/1/0245/6825/files/mr_parker_fall_hero-2_1850x.jpg?v=1637270202" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 style={{fontSize:"70px"}}>MID SEASON SALE</h5>
        <p style={{fontSize:"25px"}}>Limited Stocks Ends Soon!</p>
        <Button variant="contained" sx={{color:"white",backgroundColor:"black"}} onClick={()=>nav("/OurCollections")}>SHOP SALE</Button>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div>
<marquee direction="right" width="100%" height="20%" behavior="scroll" 	
loop="infinite" bgcolor="#3e2723" style={{color:"white"}}>ENJOY FREE SHIPPING & FREE RETURNS ON ALL ORDERS!ENJOY FREE SHIPPING & FREE RETURNS ON ALL ORDERS!ENJOY FREE SHIPPING & FREE RETURNS ON ALL ORDERS!ENJOY FREE SHIPPING & FREE RETURNS ON ALL ORDERS!

</marquee>

</div>

    </div>
  )
}
