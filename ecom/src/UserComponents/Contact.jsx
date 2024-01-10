import React from 'react'
import NavbarHead from './NavbarHead'
import Headbar from './Headbar'
import Image from './Image'
import FooterNav from './FooterNav'

export default function Contact() {
  return (
    <div>
        <Headbar/>
        <NavbarHead/>
        <div>
        <Image name="CONTACT" src="https://cdn.shopify.com/s/files/1/0245/6825/files/mr-parker-hero-001_1944x.jpg?v=1624569422" style={{transform: "scale(0.75)"}}/>

        </div>
        <div style={{display:"flex",flex:0.5}}>
            <p style={{marginLeft:"750px",marginTop:"40px"}}>Got a question?<br/><br/>No problem, our team of experts is on hand to help you out.<br/>
Fill in the form and we will get back to you within 24 hours</p>

            </div>
        <div style={{display:"flex",marginTop:"20px"}}>
        <form>
            
       
  <div className="form-outline mb-4">
    <input type="text" id="form4Example1" className="form-control" placeholder='First Name' style={{marginLeft:"40px",width:"600px"}}/>
   
  </div>
  <div className="form-outline mb-4">
    <input type="text" id="form4Example1" className="form-control" placeholder='Last Name' style={{marginLeft:"40px",width:"600px"}}/>
   
  </div>
  <div className="form-outline mb-4">
    <input type="text" id="form4Example1" className="form-control" placeholder='Company Name' style={{marginLeft:"40px",width:"600px"}}/>
   
  </div>
  <div className="form-outline mb-4">
    <input type="text" id="form4Example1" className="form-control" placeholder='Address' style={{marginLeft:"40px",width:"600px"}}/>
   
  </div>


  <div className="form-outline mb-4">
    <input type="email" id="form4Example2" className="form-control" placeholder='Email Address'style={{marginLeft:"40px",width:"600px"}} />
    
  </div>

 
  <div className="form-outline mb-4">
    <textarea className="form-control" id="form4Example3" rows="4" placeholder='Message'style={{marginLeft:"40px",width:"600px"}}></textarea>
    
  </div>

  
  

 
  <button type="submit" className="btn btn-primary btn-block mb-4" style={{color:"white",backgroundColor:"black",marginLeft:"40px"}}>Send</button>
</form>
        </div>
        
        <FooterNav/>
        
    </div>
  )
}
