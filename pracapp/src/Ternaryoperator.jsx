import React from 'react'

export default function Ternaryoperator() {
    let a=0
    let l="left"
    let r="right"
    function Clickme(v){
        return <h1>{v=="left"?alert("you clicked left button"):alert("you clicked right button")}</h1>
    }
  return (
    <>
    <h1>---------------Ternary Operatot start------------</h1>
    <div>Ternaryoperator</div>
    {a==1?<h1 style={{color:"green"}}>True</h1>:<h1 style={{color:"red"}}>False</h1>}
    <button onClick={()=>{Clickme(r)}}>Right</button>
    <button onClick={()=>{Clickme(l)}}>Left</button>
    <h1>---------------Ternary Operatot end------------</h1>
    </>
  )
}
