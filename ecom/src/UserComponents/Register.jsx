import React from 'react'
import Headbar from './Headbar'
import NavbarHead from './NavbarHead'
import { useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
    const nav=useNavigate()
    // const Log=()=>{
    //     nav("/Login")
    // }


    let initialvalue;
  if(localStorage.getItem("Users")===null){
    initialvalue=[]
  }else{
    initialvalue=JSON.parse(localStorage.getItem("Users"))
  }

  const [fname,setFname]=useState(" ")
  const [lname,setLname]=useState(" ")
  const [email,setEmail]=useState(" ")
  const [password,setPassword]=useState(" ")
  console.log(fname,lname,email,password)

  const [value,setValue]=useState(initialvalue)

  const handleSubmit = async(event) => {
    event.preventDefault();
    let userid=101
    if(value.length === 0){
      userid=101
    }else
    {
      userid=value[value.length-1].userid+1
    }



    const ob={
        userid:userid,
        fname:fname,
        lname:lname,
        email:email,
        password:password
        
      }




      setValue([...value,ob])




      localStorage.setItem("Fname",fname)
      localStorage.setItem("Lname",lname)
      localStorage.setItem("Email",email)
      localStorage.setItem("Password",password)


      await localStorage.setItem("Users",JSON.stringify(value))
   
      nav("/Login")

    };
    useEffect(()=>{
      localStorage.setItem("Users",JSON.stringify(value))
  
    },[value])

  



  return (
    <div>
        <Headbar/>
    <NavbarHead/>

    <div style={{display:"flex",flexDirection:"rows",marginTop:"20px"}}>
        <form style={{marginRight:"450px",marginLeft:"450px"}} onSubmit={handleSubmit}>
            <h3><strong>Create Account</strong></h3><br/>
            <div className="form-outline mb-4">
  <label className="form-label" for="form2Example1">First Name </label>
    <input type="text" id="form2Example1" className="form-control" style={{width:"300px"}} onChange={(e)=>{setFname(e.target.value)}}/>
   
  </div>
  <div className="form-outline mb-4">
  <label className="form-label" for="form2Example1">Last Name </label>
    <input type="text" id="form2Example1" className="form-control" style={{width:"300px"}} onChange={(e)=>{setLname(e.target.value)}}/>
   
  </div>

  <div className="form-outline mb-4">
  <label className="form-label" for="form2Example1">Email </label>
    <input type="email" id="form2Example1" className="form-control" style={{width:"300px"}}  onChange={(e)=>{setEmail(e.target.value)}}/>
   
  </div>

  
  <div className="form-outline mb-4">
  <label className="form-label" for="form2Example2">Password</label>
    <input type="password" id="form2Example2" className="form-control" onChange={(e)=>{setPassword(e.target.value)}} />
    
  </div>

  
  <div className="row mb-4">
    

    
  </div>

 
  <button type="submit" className="btn btn-primary btn-block mb-4" style={{color:"white",backgroundColor:"black",width:"300px"}} >Create</button>
  
  {/* <Link href="Login" variant="body2">
                  Already have an account? Sign in
                </Link> */}
  
</form>
    </div>
    </div>
  )
}
