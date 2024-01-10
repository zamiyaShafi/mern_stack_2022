import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import '../css/Category.css'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import "../css/Home.css"

export default function Product() {
    const nav=useNavigate();
    const [value,setValue]=useState([]);
    useEffect(()=>{
        setValue(JSON.parse(localStorage.getItem("Product")))
    },[])
    console.log(value)

    const [del,setDel]=useState([]);
  console.log(del)
  const onDelete=(del)=>{
    const newDisplay=value.filter((e)=>{
      console.log(e)
      return e!== del
    })
    setValue(newDisplay)
    localStorage.setItem("Product",JSON.stringify(newDisplay))

  }

    
  return (
    <div className='home'>
        <Navbar/>
        <h2>Product</h2>
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
        

        </div>
        <div className='button'>
            
        <button type="button" className="btn btn-outline-info" onClick={()=>{
            nav("/ProductAdd")
        }} >Add</button>
        

        </div>
<div>
<table className="table table-success table-striped">
        <thead>
    <tr>
      <th scope="col">SI NO</th>
      <th scope="col">PRO ID</th>
      <th scope="col">PRODUCT NAME/DESCRIPTION</th>
      <th scope="col">TYPE</th>
      <th scope="col">PRICE</th>
      <th scope="col">STOCK</th>
      <th scope="col">VIEW</th>
      <th scope="col">EDIT</th>
      <th scope="col">DELETE</th>
    </tr>
  </thead>
  <tbody>
  {value.map((v,index)=>{
        return(
            <tr>
        <th >{index+1}</th>
        <td>{v.pro_id}</td>
        <td>{v.name}</td>
        <td>{v.type}</td>
        <td>{v.price}</td>
        <td>{v.stock}</td>
        <td><Link to={`/ProductView/${v.pro_id}`}>View</Link></td>
        <td><Link to={`/ProductEdit/${v.pro_id}`}>Edit</Link></td>
        <td><Link to=""  data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>setDel(v)}>Delete</Link></td>
        
      </tr>

            
        )
        
    })}
    
    
  </tbody>
</table>
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Delete</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      Are you sure want to delete this?
      </div>
      <div className="modal-footer">

        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
        {/* write dat miss attribute to close that modal */}
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={()=> onDelete(del)}>Yes</button>
      </div>
    </div>
  </div>
</div>
</div>
        

        </div>
  )
}

