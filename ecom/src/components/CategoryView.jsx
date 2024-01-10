import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react'
import '../css/Home.css'

export default function CategoryView() {
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
  setSingle((JSON.parse(localStorage.getItem("Category"))).filter((item)=>{
    return item.cat_id==params.id
})
  )

},[])

console.log(single)






  return (
    <div className='home' >
        <h2 style={{textAlign:"center"}}>Single view</h2>
        <div className="card" style={{width: "18rem;",display:"flex",marginRight:"400px",marginLeft:"400px",marginTop:"-2px",border:"2px solid black"}} >
  {/* <img src="..." className="card-img-top" alt="..."/> */}
  <div className="card-body">
    <h6 className="card-title">Category Id : {single[0]?.cat_id}</h6><br/>
    <h6 className="card-title">Category Name : {single[0]?.name}</h6><br/>
    
   
    <a href="/Category" className="btn btn-primary" style={{color:"white",backgroundColor:"black"}}>BACK</a>
  </div>
</div>
    </div>
  )
}
