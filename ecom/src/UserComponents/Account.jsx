import React from 'react'
import NavbarHead from './NavbarHead'
import Headbar from './Headbar'
import FooterNav from './FooterNav'
import { style } from '@mui/system/Stack/createStack'

export default function Account() {
  return (
    <div>
        <Headbar/>
        <NavbarHead/>
        <div>
            <h3 style={{textAlign:"center",marginTop:"15px"}}> <strong>Account</strong></h3>
        </div>
        <div>
        <nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><a href="Homelanding">Home</a></li>
    <li className="breadcrumb-item"><a href="Account">Account</a></li>
    
  </ol>
</nav>
        </div>
        <div style={{display:"flex",flexDirection:"row",marginTop:"50px"}}>
            <div style={{display:"flex",flexDirection:"column",borderRight:"3px solid gray",flex:"0.3"}}>
            <button type="submit" className="btn btn-primary mb-4" style={{color:"black",backgroundColor:"white",marginLeft:"10px",marginRight:"20px",border:"none"}}>
          ACCOUNT DETAILS
           </button> <button type="submit" className="btn btn-primary mb-4" style={{color:"black",backgroundColor:"white",marginLeft:"10px",marginRight:"20px",border:"none"}}>
           ORDER HISTORY
           </button> <button type="submit" className="btn btn-primary mb-4" style={{color:"black",backgroundColor:"white",marginLeft:"10px",marginRight:"20px",border:"none"}}>
           VIEW ADDRESSES (1)
           </button>
           <button type="submit" className="btn btn-primary mb-4" style={{color:"black",backgroundColor:"white",marginLeft:"10px",marginRight:"20px",border:"none"}}>
           LOGOUT
           </button>

            </div>

            <div style={{display:"flex",flexDirection:"column",flex:"0.7"}}>
            <form  style={{marginLeft:"90px"}}>
            
            <div className="form-outline mb-4">
  <label className="form-label" for="form2Example1">First Name </label>
    <input type="text" id="form2Example1" className="form-control" style={{width:"300px"}}/>
   
  </div>
  <div className="form-outline mb-4">
  <label className="form-label" for="form2Example1">Last Name </label>
    <input type="text" id="form2Example1" className="form-control" style={{width:"300px"}} />
   
  </div>

  <div className="form-outline mb-4">
  <label className="form-label" for="form2Example1">Email </label>
    <input type="email" id="form2Example1" className="form-control" style={{width:"300px"}}  />
   
  </div>
  </form>

            </div>
        </div>
        <FooterNav/>

    </div>
  )
}
