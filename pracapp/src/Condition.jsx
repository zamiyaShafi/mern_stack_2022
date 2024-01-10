import React from 'react'

export default function Condition() {
    function Toggle(){
        const a=0
        if(a==0){
            return "its off"
        }else{
        return "its on"
        }
    }
    
    function Greater(props){
        const n=props.no
        if(n==0){
            return "number equals to zero"
        }else
        if(n>0 && n<5){
            return "number is less than five and greater than zero"
        }else
        if(n>5 && n<10){
            return "number is greater than five and less than 10"
        }else
        return "Invalid number"

    }
    const White=()=>"its white"
    const Black=()=>"its black"
    function Color(props){
        const c=props.cr
        if(c=="white"){
            return <White/>
        }else
        if(c=="black"){
            return <Black/>
        }else
        return "invalid color"
        
    }
    
  return (
    <>
    <div>
        <h1>---------------Condition start------------</h1>
        <Greater no="4" /><br/>
        <Toggle/><br/>
        <Color cr="black"/>
        <h1>---------------Condition End------------</h1>


    </div>
    </> 
  )
}
