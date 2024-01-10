import React from 'react'

export default function Spreadoperator() {
    // spread operator used in array to combine
    const a1=[1,2,3,4,5,6]
    const a2=[7,8,9,5]
    const combinedarray=[...a1,...a2]
    // 2 object using spread operator to combine
    const ob1={
      type:"flower",
      color:"yellow",
      name:"sunflower"
    }
    const ob2={
      item:"flower",
      chroma:"red",
      ex:"rose"
    }
    const combinedob={...ob1,...ob2}
    // array destructuring and combined using spread operator
    const a=[1,2,3,4,5,6]
    const[b,c,...d]=a
  return (
    <>
    <h1>--------------Spreadoperatot start--------------</h1>
    <div>Spreadoperator</div>
   {console.log({combinedarray})}<br/>
   {combinedarray}<br/>
    {a1+a2}<br/>
    {console.log(combinedob)}<br/>
    {combinedob.name}<br/>
    {b}{c}<br/>
    {d}

    <h1>--------------Spreadoperatot end--------------</h1>
    </>
  )
}
