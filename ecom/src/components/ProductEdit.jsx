import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
export default function ProductEdit() {
    const param=useParams();
    const [single,setSingle]=useState([]);
    const [name,setName]=useState("");
    console.log(param.id)
    useEffect(()=>{
        setSingle((JSON.parse(localStorage.getItem("Product"))).filter((item)=>{
          return item.pro_id==param.id
      })
        )
      
      },[])
      
      console.log(single)
      

  return (
    <div>
        <form>
  <div className="mb-3">
    <h3><center>Edit Product Here</center></h3><br/>
    {single.map((v)=>{
        return(
            <>
            <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">PRODUCT NAME  </label>&nbsp;&nbsp;
    <input type="text" contentEditable="true" value={v.pro_id}  onChange={(e)=>{setName(e.target.value)}} />
    </div>
    <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">PRODUCT TYPE  </label>&nbsp;&nbsp;
    <input type="text" contentEditable="true" value={v.name}  onChange={(e)=>{setName(e.target.value)}} />
    </div>
    <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">PRICE  </label>&nbsp;&nbsp;
    <input type="text" contentEditable="true" value={v.price}  onChange={(e)=>{setName(e.target.value)}} />
    </div>
    <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">STOCK  </label>&nbsp;&nbsp;
    <input type="text" contentEditable="true" value={v.stock}  onChange={(e)=>{setName(e.target.value)}} />
    </div>
            </>
        )

    })
    }
    
    
  
    
  </div>
  
  
 
  
  
  
  {/* <button type="submit" className="btn btn-primary" onClick={Submit}>Submit</button> */}
</form>
    </div>
  )
}
