import React from 'react'
import "../css/TextSlider.css"



export default function TextSlider() {
  return (
    <div>
        {/* <div id="carouselExampleRide" classNameName="carousel slide" data-bs-ride="true">
  <div classNameName="carousel-inner">
    <div classNameName="carousel-item active">
      <p classNameName="d-block w-100" style={{backgroundColor:"#bf8040",color:"white"}}><center>20% off all orders with code SAVE20</center></p>
    </div>
    <div classNameName="carousel-item">
      <p  classNameName="d-block w-100"style={{backgroundColor:"#bf8040",color:"white"}} ><center>Free shipping on all orders over $100</center></p>
    </div>
    <div classNameName="carousel-item">
      <p  classNameName="d-block w-100" style={{backgroundColor:"#bf8040",color:"white"}}><center>Annual SALE now on - Save up to 60%</center></p>
    </div>
  </div>
  <button classNameName="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span classNameName="carousel-control-prev-icon" aria-hidden="true"></span>
    <span classNameName="visually-hidden">Previous</span>
  </button>
  <button classNameName="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span classNameName="carousel-control-next-icon" aria-hidden="true"></span>
    <span classNameName="visually-hidden">Next</span>
  </button>
</div> */}


{/* <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <p  className="d-block w-100" style={{backgroundColor:"#bf8040",color:"white",textAlign:"center"}}>Free shipping on all orders over $100</p>
    </div>
    <div className="carousel-item">
      <p  className="d-block w-100" style={{backgroundColor:"#bf8040",color:"white",textAlign:"center"}}>20% off all orders with code SAVE20</p>
    </div>
    <div className="carousel-item">
      <p  className="d-block w-100" style={{backgroundColor:"#bf8040",color:"white",textAlign:"center"}}>Free shipping on all orders over $100</p>
    </div>
  </div>
</div> */}
<div className="hwrap"><div class="hmove">
  <div className="hslide">
    
    <p style={{textAlign:"center"}}>20% off all orders with code SAVE20</p>
  </div>
  <div className="hslide">
    
    <p style={{textAlign:"center"}}>Free shipping on all orders over $100</p>
  </div>
  <div className="hslide">
   
    <p style={{textAlign:"center"}}>Annual SALE now on - Save up to 60%</p>
  </div>
</div></div>



        </div>
  )
}
