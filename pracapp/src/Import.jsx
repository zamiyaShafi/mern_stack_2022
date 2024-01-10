import React from 'react'
import Ccc,{name,age,place,Print} from './Export'

export default function Import() {
  return (
    <>
    <h1>---------------Import start--------------</h1>
    <div>Import</div>
    {name}<br/>
    {age}<br/>
    {place}<br/>
    <Print name={name}/>
    <Ccc pin={575027}/>
    <h1>---------------Import end--------------</h1>
    </>
  )
}
