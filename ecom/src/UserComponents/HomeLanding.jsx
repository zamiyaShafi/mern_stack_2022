import React from 'react'
import Headbar from './Headbar'
import NavbarHead from './NavbarHead'
import TextSlider from './TextSlider'
import MovingSlider from './MovingSlider'
import FooterNav from './FooterNav'
import SubImage from './SubImage'



export default function HomeLanding() {
  return (
    <div>
      
      {/* head */}
      <div>
      <Headbar/>

      </div>
      




      {/* navbarhead */}
      <div>
        <NavbarHead/>
      </div>
      {/* <NavbarHead/> */}




      {/* Text slide */}
      <div>
      <TextSlider/>

      </div>
     
      




      {/* moving slide */}
      <div style={{marginTop:"-17px"}}>
        <MovingSlider/>
      </div>
      {/* SubImage */}
      <div>
       <SubImage/>
      </div>



      {/* new arrivals */}


      {/* our faves */}


      {/* sales now on */}

      {/* Footer */}<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <FooterNav/>

    </div>
  )
}
