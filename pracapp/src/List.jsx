import React from 'react'

export default function List() {
    function Answer(props){
        return <h3>My name is  {props.name} and my num{props.class}</h3>
    }
    function Question(){
        const a=["zamiya","Raseena"]
        return(
            <>
            <h3>Who are you</h3>
        
        {a.map((value,index)=>{ return <Answer name={value} class={index}  />})}
        {/* // {a.map((value)=>{<Answer class={value}  />})} */}
        </>
        )

    }
  return (
    <div>
        <h1>-------------List start------------------</h1>
        <Question/>

        <h1>-------------List End------------------</h1>
    </div>
  )
}
