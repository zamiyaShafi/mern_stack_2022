import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
export default function CategoryEdit() {
    const param=useParams();
    const [single,setSingle]=useState([]);
    const [name,setName]=useState("");
    console.log(param.id)
    useEffect(()=>{
        setSingle((JSON.parse(localStorage.getItem("Category"))).filter((item)=>{
          return item.cat_id==param.id
      })
        )
      
      },[])
      
      console.log(single)
      console.log(name)
      const Change=(e)=>{
        single[0].name=e.target.value
        setName(e.target.value)

      }
      

  return (
    <div>
        <form>
  <div className="mb-3">
    <h3><center>Edit Category Here</center></h3><br/>
    
            <>
            <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">CATEGORY NAME  </label>&nbsp;&nbsp;
    <input type="text" contentEditable="true" value={single[0]?.name}  onChange={Change} />
    </div>
            </>
        


    
    
  
    
  </div>
  
  
 
  
  
  
  {/* <button type="submit" className="btn btn-primary" onClick={Submit}>Submit</button> */}
</form>
    </div>
  )
}
