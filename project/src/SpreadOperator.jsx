import React from 'react'

export default function SpreadOperator() {
  const Array1=[1,2,3,4,5]
  const Array2=[7,8,9,0]
  const combineArray=[...Array1,...Array2]
  const ob1={
    name:"zamiya",
    age:"21"
  }
  const ob2={
    qual:"bca",
    place:"bajal"
  }
  const combineObject={
    ...ob1,...ob2
  }
  const A=[9,8,7,6,5,4,3,2,1]
  const[c,g,f,...rest]=A
  return (
    <>
    <h1><u>SpreadOperator</u><br/></h1>
    <h3>spread operator using array</h3>
      {combineArray}
      <h3>spread operator using object</h3><br/>
      {console.log(combineObject)}
      <h3>array destructuring and combinig using spread operator</h3>
      {c}<br/>
      {g}<br/>
      {f}<br/>
      {rest}<br/>
      


      </>
    
  )
}
