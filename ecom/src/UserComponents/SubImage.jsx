import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function SubImage() {
    const nav=useNavigate()
   
  return (
    <div style={{display:"flex",flexDirection:"row",padding:"20px"}}>
        <div style={{display:"flex",flexDirection:"column"}}>
            <img src="https://cdn.shopify.com/s/files/1/0245/6825/files/hero__1_d4dacb90-7b4e-498c-bb8a-83a9ffdd2e68_540x.jpg?v=1650481443" style={{width:"400px",height:"500px",marginRight:"20px"}} />
            <div style={{marginTop:"-280px",marginLeft:"50px"}}>
            <p style={{color:"white",fontSize:"40px"}} ><strong>NEW ARRIVALS</strong></p>
            <Button style={{color:"white",backgroundColor:"black",height:"50px",width:"130px",marginLeft:"70px",marginTop:"-8px"}}  onClick={()=>nav("/NewArrivals")}>SHOP NOW</Button>
            </div>

        </div>
        <div style={{display:"flex",flexDirection:"column"}}>
        <img src="https://cdn.shopify.com/s/files/1/0245/6825/files/hero__2_540x.jpg?v=1650481345" style={{width:"400px",height:"500px",marginRight:"20px"}}/>
        <div style={{marginTop:"-280px",marginLeft:"80px"}}>
            <p style={{color:"white",fontSize:"40px"}} ><strong>OUR FAVES</strong></p>
            <Button style={{color:"white",backgroundColor:"black",height:"50px",width:"200px",marginLeft:"10px",marginTop:"-8px"}} onClick={()=>nav("/OurCollections")}>VIEW COLLECTION</Button>
            </div>
        </div>
        <div style={{display:"flex",flexDirection:"column"}}>
        <img src="https://cdn.shopify.com/s/files/1/0245/6825/files/hero__1_540x.jpg?v=1650481332"style={{width:"400px",height:"500px",marginRight:"20px"}} data-mdb-toggle="animation" data-mdb-animation-reset="true" data-mdb-animation="fade-in-down" data-mdb-animation-start="onScroll"/>
        <div style={{marginTop:"-280px",marginLeft:"50px"}}>
            <p style={{color:"white",fontSize:"40px"}} ><strong>SALE NOW ON</strong></p>
            <Button style={{color:"white",backgroundColor:"black",height:"50px",width:"130px",marginLeft:"70px",marginTop:"-8px"}} onClick={()=>nav("/NewArrivals")}>SHOP SALE</Button>
            
            </div>
        </div>

    </div>
  )
}
