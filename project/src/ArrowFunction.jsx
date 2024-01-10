import React from 'react'

export default function ArrowFunction() {
  function Simple(){
    return "hello whats up"
  }
  const Same=()=>"Hello what are you doing"
  return (
    <div>
      <h1><u>Simple Arrow function</u></h1>
<Simple/><br/>
<Same/><br/>
<button onClick={()=>alert("hey you clicked me")}>Click Me</button>
    </div>
  )
}
