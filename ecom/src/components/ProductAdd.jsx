import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../css/Home.css"

export default function ProductAdd() {
   


    const nav=useNavigate();
    let initialvalue;
    if(localStorage.getItem("Product")===null){
        initialvalue=[];
    }else{
        initialvalue=JSON.parse(localStorage.getItem("Product"))
    }

    const [name,setName]=useState(" ");
    const [type,setType]=useState(" ");
    const [price,setPrice]=useState(" ");
    const [stock,setStock]=useState(" ");

    const [value,setValue]=useState(initialvalue)
    console.log(name)
    const Submit=async(e)=>{
        e.preventDefault();
        var pro_id=101;
        if(value.length===0){
            pro_id=101
        }
        else{
            pro_id=value[value.length-1].pro_id+1
        }
        const ob={
            pro_id:pro_id,
            name:name,
            type:type,
            price:price,
            stock:stock
        }
        setValue([...value,ob])


        localStorage.setItem("ProductName",name)
        localStorage.setItem("ProductType",type)
        localStorage.setItem("ProductPrice",price)
        localStorage.setItem("ProductStock",stock)
        

        
        

        await localStorage.setItem("Product",JSON.stringify(value))

        nav("/Product")


    }
    useEffect(()=>{
        localStorage.setItem("Product",JSON.stringify(value))

    },[value])
  return (
    <div>
        <div>
        <form>
  <div className="mb-3">
    <div className='home'>
    <h2><center>Add Product Here</center></h2>

    </div>
    
    
    <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Product Name  </label>&nbsp;&nbsp;
    <input type="text"  onChange={(e)=>{setName(e.target.value)}} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Product type  </label>&nbsp;&nbsp;
    <input type="text"  onChange={(e)=>{setType(e.target.value)}} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Product Price  </label>&nbsp;&nbsp;
    <input type="text"  onChange={(e)=>{setPrice(e.target.value)}} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Product Stock  </label>&nbsp;&nbsp;
    <input type="text"  onChange={(e)=>{setStock(e.target.value)}} />
  </div>
    
  </div>
  
  
 
  
  
  
  <button type="submit" className="btn btn-primary" onClick={Submit}>Submit</button>
</form>
        </div>
    </div>
  )
}
