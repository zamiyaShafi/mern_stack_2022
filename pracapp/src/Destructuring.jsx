import React from 'react'

export default function Destructuring() {
    // destructuring for array
    let a=[1,2,3,4,5]
    // old method
    let x=a[0]
    let y=a[1]
    // new method
    let [m,n,o]=a
    // destructuring of object
    const O={
        car:"benz",
        country:"USA",
        city:"LA"
    }
    // step1 creat a function to destructure and declare a variable outside the function that can be used inside the function
    var msg
    const destruc=({car,city})=>{
        msg="My car"+car+" which is registered in the city"+city
        return <h1>{msg}</h1>

    }
    // now declare the function with object as a parameter
    destruc(O)
    // destructuring of object using object
    // 1.create an variable
    var msg1
    // 2.define the function for destructuring of an object
    const des=(v)=>{
      msg1="my car is  "+ v.car +" and it is registered in "+ v.country
    }
    // call the function by sending object as a parameter
    des(O)
    // destructuring of nested object
    const ob={
      name:"zamiya",
      age:"21",
      place:"bajal",
      quali:"bca",
      detail:{
        e1:"sslc",
        e2:"puc",
        e3:"degree"

      }
    }
    // 1.declare the variable that can be used inside the destructuring function
    var msg3
    // 2.define the function that destructure the nested object
    const nesdes=({name,place,detail:{e1,e2}})=>{
      msg3="my name is "+name+ " and i am from "+place+" and i completed my "+e1+" "  + e2

    }
    // 3.call the function by passing the nested object as a parameter
    nesdes(ob)



  return (
    <>
    <h1 style={{color:"brown"}}>---------------destructuring start--------------</h1>
    <div>Destructuring</div>
    {x}<br/>
    {y}<br/>
    {m}<br/>
    {n}<br/>
    {o}<br/>
    <destruc/>
    {msg}<br/>
    {msg1}<br/>
    {msg3}
    <h1 style={{color:"brown"}}>---------------destructuring end--------------</h1>
    </>
  )
}
