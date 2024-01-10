import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import '../css/Category.css'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import "../css/Home.css"

export default function Customers() {
    const nav=useNavigate();
    const [value,setValue]=useState([]);
    useEffect(()=>{
        setValue(JSON.parse(localStorage.getItem("Users")))
    },[])
    console.log(value)

    
  return (
    <div className='home'>
        <Navbar/>
        <h2>Customers</h2>
        {/* button to add */}
        {/* form  to view and it shoul have view edit delete*/}
       
        <div className='surf'>
        <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>

        </div>
        <div className='buttonback'>
          <button type="button" className="btn btn-outline-info" onClick={()=>{
            nav("/Home")
        }} >Back</button>
        

        </div><br/><br/><br/>
        {/* <div className='button'>
            
        <button type="button" className="btn btn-outline-info" onClick={()=>{
            nav("/ProductAdd")
        }} >Add</button>
        

        </div> */}
        {/* <div className='button'> */}
            
        {/* <button type="button" className="btn btn-outline-info" onClick={()=>{
            nav("/UsersAdd")
        }} >Add</button>
         */}
{/* 
        </div> */}
<div>
<table className="table table-success table-striped">
        <thead>
    <tr>
      <th scope="col">SI NO</th>
      <th scope="col">User ID</th>
      <th scope="col">FIRST NAME</th>
      <th scope="col">LAST NAME</th>
      <th scope="col">EMAIL</th>
      <th scope="col">PASSWORD</th>
      <th scope="col">VIEW</th>
      
      <th scope="col">DELETE</th>
    </tr>
  </thead>
  <tbody>
  {value.map((v,index)=>{
        return(
            <tr>
        <th >{index+1}</th>
        <td>{v.userid}</td>
        <td>{v.fname}</td>
        <td>{v.lname}</td>
        <td>{v.email}</td>
        <td>{v.password}</td>
        <td><Link to={`/UsersView/${v.userid}`}>View</Link></td>
        
        <td><Link to="/Home">Delete</Link></td>
        
      </tr>

            
        )
        
    })}
    
    
  </tbody>
</table>
</div>
        

        </div>
  )
}

