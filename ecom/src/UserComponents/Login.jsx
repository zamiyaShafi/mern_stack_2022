import React from 'react'
import NavbarHead from './NavbarHead'
import Headbar from './Headbar'
import { useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'

export default function Login() {
    const nav=useNavigate()

    const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const [single,setSingle]=useState([]);
  
  const ob={
    lemail:email,
    lpassword:password
  }
  
  const HandleSubmit = (event) => {
    event.preventDefault();
    setSingle(JSON.parse(localStorage.getItem("Users")))
    console.log(single)
    
    console.log(ob.lemail)
    
     const v=single.filter((item)=>{return (item.email===ob.lemail && item.password===ob.lpassword)})
    console.log(v)

    if(ob.lemail==="admin@gmail.com"&& ob.lpassword==="1234"){
      alert("sucessful login")
      nav("/Home")
    }
   else
   
    if(v.length!=0){
      alert("sucessful login")
      nav("/Account")
    } else
    
    if(v.length==0){
      alert("Incorrect Password or Email")
      
    }
};





    const Reg=()=>{
        nav("/Register")
    }
  return (
    <div>
    <Headbar/>
    <NavbarHead/>

    <div style={{display:"flex",flexDirection:"rows",marginTop:"20px"}}>
        <form style={{marginRight:"450px",marginLeft:"450px"}} onSubmit={HandleSubmit} >
            <h3><strong>Login</strong></h3><br/>

  <div className="form-outline mb-4">
  <label className="form-label" for="form2Example1">Email </label>
    <input type="email" id="form2Example1" className="form-control" style={{width:"300px"}} onChange={(e)=>{setEmail(e.target.value)}}/>
   
  </div>

  
  <div className="form-outline mb-4">
  <label className="form-label" for="form2Example2">Password</label>
    <input type="password" id="form2Example2" className="form-control" onChange={(e)=>{setPassword(e.target.value)}}/>
    
  </div>

  
  <div className="row mb-4">
    

    <div className="col">
   
      <a href="#!">Forgot password?</a>
    </div>
  </div>

 
  <button type="submit" className="btn btn-primary btn-block mb-4" style={{color:"white",backgroundColor:"black",width:"300px"}}>Log in</button>
  <p style={{color:"gray"}}>----------------or------------------</p>
  <button type="submit" className="btn btn-primary btn-block mb-4" style={{color:"white",backgroundColor:"gray",width:"300px"}} onClick={Reg}>Create Account</button>

  
</form>
    </div>
    </div>
  )
}
