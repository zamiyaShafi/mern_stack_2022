import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/Home.css'

export default function CategoryAdd() {
    const nav=useNavigate();
    let initialvalue;
    if(localStorage.getItem("Category")===null){
        initialvalue=[];
    }else{
        initialvalue=JSON.parse(localStorage.getItem("Category"))
    }

    const [name,setName]=useState(" ");
    const [value,setValue]=useState(initialvalue)
    console.log(name)
    const Submit=async(e)=>{
        e.preventDefault();
        var cat_id=101;
        if(value.length===0){
            cat_id=101
        }
        else{
            cat_id=value[value.length-1].cat_id+1
        }
        const ob={
            cat_id:cat_id,
            name:name
        }
        setValue([...value,ob])


        localStorage.setItem("CategoryName",name)
        

        
        

        await localStorage.setItem("Category",JSON.stringify(value))

        nav("/Category")


    }
    useEffect(()=>{
        localStorage.setItem("Category",JSON.stringify(value))

    },[value])
  return (
    <div >
        <div>
        <form>
  <div className="mb-3" >
    <div className='home'>
    <h2><center>Add Category Here</center></h2>
    </div>
    
    
    <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">CATEGORY NAME  </label>&nbsp;&nbsp;
    <input type="text"  onChange={(e)=>{setName(e.target.value)}} />
  </div>
    
  </div>
  
  
 
  
  
  
  <button type="submit" className="btn btn-primary" onClick={Submit}>Submit</button>
</form>
        </div>
    </div>
  )
}
