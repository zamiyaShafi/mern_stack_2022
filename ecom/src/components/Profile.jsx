import React from 'react'
import "../css/Home.css"
import { Avatar } from '@mui/material'

export default function Profile() {
  return (
    <div className='home'>
        <h2 style={{textAlign:"center"}}>Admin profile</h2>
        
        <div className="card" style={{width: "18rem",alignContent:"center",marginLeft:"500px",border:"2px solid black "}}>
        
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDBUAzsVrD93J0Bb2T3_9UumOqGBviRMKl_Q&usqp=CAU" className="card-img-top" alt="..." style={{width:"150px",height:"150px",marginRight:"60px",marginLeft:"60px",marginTop:"10px",border:"2px solid black",borderRadius:"20px"}}/>
 
  <div className="card-body">
    <h6 className="card-title">Admin</h6>
    <p className="card-text">Admin Id : admin@gmail.com</p>
    <a href="/Home" className="btn btn-primary" style={{color:"white",backgroundColor:"black"}}>Back</a>
    <a href="/" className="btn btn-primary" style={{color:"white",backgroundColor:"black",marginLeft:"20px"}}>Log out</a>
  </div>
</div>
    </div>
  )
}
