import React from 'react'

export default function TernaryOperator() {
  let a="false"
  const Button=(value)=>{
    return(
      <>
      {value=="right"?alert("you have clicked right button"):alert("you have clicked left button")}
      </>
    )

  }
  return (
    <div><h1><u>TernaryOperator</u></h1>
    {a=="true"?<h1 style={{color:"green"}}>True</h1>:<h1 style={{color:"red"}}>False</h1>}
    <button onClick={()=>Button("right")}>Right</button>
    <button onClick={()=>Button("Left")}>Left</button>

    </div>
  )
}
