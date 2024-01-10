import React from 'react'

export default function() {
function User(props){
    return(
        <>
        {props.name}
        </>
    )


}
function User1({name}){
    return (
        <>
        {name}
        </>
    )

}
function User3({children}){
    return(
        <>
        {children}
        </>
    )
}
// -----------------------------props ends
function Madam(){
    let name="zamiya"
    
    if(name){
        return <h1>Hey</h1>
    }else
    {
        return <h1>What</h1>
    }

    
    

}
let Admin="zakiya"
let a=[10,20,30,40]

return (
    <div>
        <h1>--------------Practice------------</h1>
        <User name="zamiya"/>
        <User1 name="Mariyamma"/>
        <User3>
            <h1>hello whats up???</h1>
            <h1>hello whats up???</h1>
        </User3>
        <Madam/>
        {Admin?<h1>heyyyy</h1>:<h2>woooooooooo</h2>}
       {a.map((val)=>{
        return <h1>{val}</h1>
       })}
    </div>
  )
}
