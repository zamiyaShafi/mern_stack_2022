import React from 'react'
import "../css/Headbar.css"
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import PersonOutlineSharpIcon from '@mui/icons-material/PersonOutlineSharp';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Badge } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useNavigate } from 'react-router-dom';


export default function Headbar() {
    
  const nav=useNavigate();
  const Log=()=>{
    nav("/Login")
  }
  return (
    <div>
        <div className={"headbar "}>
        <nav className="navbar sticky-top bg-body-tertiary"  >
  <div className="container-fluid" style={{backgroundColor:"#3e2723"}}>
    {/* <a class="navbar-brand" href="#" >Sticky top</a> */}
    <div className='icons'>
    <FacebookRoundedIcon style={{color:"white"}}/>
    <InstagramIcon style={{color:"white"}}/>
    <PinterestIcon style={{color:"white"}}/>
    <YouTubeIcon   style={{color:"white"}}/>
    </div>
    <div className='sideicons'>
    
        <PersonOutlineSharpIcon style={{color:"white"}} onClick={Log}/>
        
        
        <Badge color="secondary" badgeContent={5}>
        <ShoppingBagOutlinedIcon  style={{color:"white"}}/>
      </Badge>
       


        
        
        
        <FavoriteBorderIcon style={{color:"white"}} />
  
      
    </div>
   
  </div>
</nav>
        </div>
        

    </div>
  )
}
