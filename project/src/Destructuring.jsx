import React from 'react'

export default function Destructuring() {
  const Array=[1,23,45,67,66]
  const a=Array[0]
  const b=Array[1]
  const c=Array[2]
  const [z,x,m,v]=Array
  const ob1={
    name:"zamiya",
    age:21,
    place:"bajal",
    qual:"bca"
  }
  var msg
  const Desob=(v)=>{
    msg= "I am "+v.name+" i am from "+v.place+" i am "+v.age
    return msg

  }
  Desob(ob1)
  var s
  const Obdes=({name,age,place})=>{
    s= "I am "+name+" i am from "+place+" i am "+age
    return s

  }
  Obdes(ob1)
  const nes={
    name:"zamiya",
    place:{
      city:"mangalore",
      district:"dk"
    },
    age:21

  }


  var xa
  
  const Nesdes=({name,place:{city,district},age})=>{
    xa="i am "+name+" i am from "+city+" , "+district+" i am "+age
    return xa


  }
  Nesdes(nes)
  return (

    


    <div>
      <h1><u>Destructuring</u></h1>
      <h3>Destructuring of an array using old method<br/></h3>
      {Array}<br/>
      {a}<br/>
      {b}<br/>
      {c}<br/>
      <h3>Destructuring of an array using new method<br/></h3>
      {z}<br/>
      {x}<br/>
      {m}<br/>
      {v}<br/>
      <h3>Destructuring of an object using old method<br/></h3>
      {msg}
      <h3>Destructuring of an object using new method<br/></h3>
      {s}
      <h3>Destructuring of nested object using new method<br/></h3>
      {xa}
      {console.log(xa)}


      

      
      </div>
  )
}
