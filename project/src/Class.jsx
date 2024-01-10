// import React from 'react'

// export default function Class() {
//     class Parent{
//         constructor(faname,moname,cplace){
//             this.fname=faname
//             this.mname=moname
//             this.place=cplace

//         }
//         Show(){
//             return(
//                 <>
//                 <h1>Parents Details:</h1>
//                 <h1>Father Name: {this.fname}</h1>
//                 <h1>Mother Name: {this.mname}</h1>
//                 <h1>Place: {this.place}</h1>
//                 </>
//             )
//         }
//     }
//     class Student extends Parent{
//         constructor(name,section,age,faname,moname,cplace){
//             super(faname)
//             super(moname)
//             super(cplace)
//             this.name=name
//             this.sec=section
//             this.age=age

//         }
//         Display(){
//             return(
//                 <>
//                 <h1>Student Detatils</h1>
//                 <h1>Name: {this.name}</h1>
//                 <h1>Section: {this.sec}</h1>
//                 <h1>Age: {this.age}</h1>
//                 {/* {this.Show()} */}
                
                
                
//                 </>
//             )
//         }
//     }
//     const s=new Student("zamiya","bca",20,"shafi","mname","bajal")
//     // const p=new Parent("Shafi","hazara","bajal")

    
//   return (
//     <div>
//         {s.Display()}
//         {/* {p.Show()} */}
//         <h2>{s.Show()}</h2>

//     </div>
//   )
// }
