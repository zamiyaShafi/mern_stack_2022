//1. inline export
export const name="zamiya_mariyamma"
export const age=21
// 2.grouped export
const place="bajal,mangalore"
function Print(props){
    return "this is me "+ props.name
}
export{place,Print}
// default export 

const Pincode=(props)=>{
    return props.pin
}
export default Pincode
// the advantage of using default export is that it cane be imported with any name
