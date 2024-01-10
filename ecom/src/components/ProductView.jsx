import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react'
import "../css/Home.css"
import { useNavigate } from 'react-router-dom'

export default function ProductView() {
  const nav=useNavigate();
  // creating param variable
  const params=useParams()
  console.log(params.id)
  console.log(params)
  // here id is from router where you have specified

// created array to store values
  const [single,setSingle]=useState([]);


  // to get value from local storage use useeffect
  // filter can take only array of objevt
useEffect(()=>{
  setSingle((JSON.parse(localStorage.getItem("Product"))).filter((item)=>{
    return item.pro_id==params.id
})
  )

},[])

console.log(single)






  return (
    <div className='home'>
        <h2 style={{textAlign:"center"}}>Single view</h2>
        <div className="card" style={{width: "18rem;",display:"flex",marginRight:"400px",marginLeft:"400px",marginTop:"-2px",border:"2px solid black"}} >
  {/* <img src="..." className="card-img-top" alt="..."/> */}
  <div className="card-body">
    <h6 className="card-title">Product Id : {single[0]?.pro_id}</h6><br/>
    <h6 className="card-title">Name : {single[0]?.name}</h6><br/>
    <h6 className="card-title">Type : {single[0]?.type}</h6><br/>
    
    <h6 className="card-title">Price : {single[0]?.price}</h6><br/>
    <h6 className="card-title">Stock : {single[0]?.stock}</h6><br/>
    
   
    {/* <a href="/Product" className="btn btn-primary" sx={{color:"red"}}>BACK</a> */}
    <button className="btn btn-outline-success" type="submit" onClick={()=>nav("/Product")} style={{color:"white",backgroundColor:"black"}}>Back</button>
   
        

        
  </div>
</div>
    </div>
  )
}
