import React from 'react'

export default function Arrowfunction() {
    // normal function
    function Abc(){
        return <h3>Hello whats up</h3>
    }
    // above function can be written in arrow function as follows
    const Xyz=()=>{
        return <h3>Hey this is written using arrow function</h3>
    }
    // Arrow function can also be written using single line
    const Mno=()=> 'Hey what up'

  return (
    <>
    <h1 style={{color:"brown"}}>-------------------arrow function start-------------</h1>
    <div>Arrowfunction</div>
    <Abc/>
    <Xyz/>
    <Mno/>
    <h1 style={{color:"brown"}}>-------------------arrow function end-------------</h1>
    </>
  )
}
