import React from 'react'

export default function Array() {
    // creating an array
    let a=[1,2,3,4,5]
    let b=["banana","apple","mango"]
    // creating a function that takes elements of an array and prints it
    function Print(val){
        return <h3>{val}</h3>
    }
    // the above function can also be written in arrow function such that:
    // function Print=(val)=>{
    //     return <h3>{val}</h3>
    // }
  return (
    <>
    <h1 style={{color:"brown"}}>----------------Array start----------------</h1>
    <div>Array</div>
    {/* printing an array */}
    <h1>{a}</h1>
    <h1>{b}</h1>
    {/* printing an array using map function */}
    <h1>{b.map((val)=>{return <h1>{val}</h1>})}</h1>
    {/* sending elements of an array to the function */}
    <h1>{b.map((val)=>{return Print(val)})}</h1>
    <h1 style={{color:"brown"}}>----------------Array end----------------</h1>
    </>
  )
}
