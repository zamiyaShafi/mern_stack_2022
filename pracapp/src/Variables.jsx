import React from 'react'

export default function Variables() {
    let a=1
    const b="aba"
    var c=[1,2,3,4]
    const o={                 /*defining an object*/
        a:"1",
        b:"2",
        c:"3"

    }
  return (
    <>
    <h1 style={{color:"brown"}}>------------Variables start---------------</h1>
    <h3>{a}</h3>
    <h3>{b}</h3>
    <h3>{c}</h3>
    <h3>{o.a}</h3>         /* using or calling an object*/
    <h3>{o.b}</h3>
    <h3>{o.c}</h3>
    
    <h1 style={{color:"brown"}}>------------Variables end---------------</h1>
    </>
  )
}
