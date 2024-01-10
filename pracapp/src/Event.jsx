import React from 'react'

export default function Event() {
    // simple function that does not take any parameter
    const Message=()=>{
        return alert("You are beautiful")
    }
    // function which takes an argument
    const Msg=(m)=>{
        return alert(m +" you are beautiful")
    }
    const Msg1=(z)=>{
        return alert("Do you want to change the text "+ z)
    }
    const Dis=()=>{
        return alert("Amazing picture though")
    }
  return (
    <div>
        <h1>---------------Event start----------------</h1>
        {/* onclick event which calls function while clicking */}
        <button onClick={Message}>Click Me</button><br/>
        {/* if you call function with argument directly in an event then you would probabbly see togglling alert so in order to avoid that you have to call function within arrow function */}
        {/* <button onClick={Msg("zamiya")}>Click me again</button> */}
        <button onClick={()=>{Msg("zamiya")}}>Click me again</button><br/>
        <input type="text" onChange={()=>{Msg1("zamiya")}}></input><br/><br/>
        <img src='https://th.bing.com/th/id/OIP.lpCUiRHqoc-O8j2NI0LpuQHaEo?w=302&h=188&c=7&r=0&o=5&dpr=1.5&pid=1.7' onMouseOver={Dis}></img>

        <h1>---------------Event end----------------</h1>
    </div>
  )
}
