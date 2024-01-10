import React from 'react'

export default function Classes() {
    class Primary{
        constructor(last,std){
            this.name='zamiya '+ last
            this.division=std
        }
        display(){
            return <h3>my name is {this.name} and my division is {this.division}</h3>

        }

        
    }
    const p=new Primary('mariyamma','bca')
  return (
    <>
    <h1 style={{color:"brown"}}>-------------------class start------------</h1>
    <div>Classes</div>
    <h2>{p.name}</h2>      /*this is the simple class which consists of parameterized constructor*/
    <h2>{p.display()}</h2>
    <h1 style={{color:"brown"}}>-------------------class end------------</h1>
    </>
  )
}
