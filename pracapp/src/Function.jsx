import React from 'react'

export default function Function() {
  function Car(){
    let c="str"
    return <h1>{c}</h1>
  }
    function Abc(){
        return <h1>this is the simple function</h1>
    }
    function Var(props){
        return <h1>the Number is: {props.no}<br/>//This is the argument passed function using props</h1>
    }
    function Sum(props){
        let z=+props.x + +props.y
        return <h1>the sum of {props.x} and {props.y} is: {z}<br/>//this the multiple argument taking function</h1>
    }
  return (
    <>
    <div>Function</div>
    <h1 style={{color:"brown"}}>------------------FUNCTION START-------------</h1>
    <Car/>
    
    <Abc/>
  <Var no='5 '/>
  <Sum x='5' y='4' />
    
    <h1 style={{color:"brown"}}>------------------FUNCTION START-------------</h1>

    </>
  )
}
