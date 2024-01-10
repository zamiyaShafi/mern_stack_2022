import React from 'react'

export default function Test() {
    
    function Binarysearch() {
        let arr=[1,2,3,4,5]
        let k=6
        let n=5
        for (let i = 0; i < arr.length; i++) {
            if(arr[i]==k){
            return i
            }else
            return -1
            
        }
      //   let a=[1,2,3,4,5]
      //   let n1=5
      //   let k1=3
      //   let i=0
      //   function ReverseInGroups(a, n1, k1){
      //     for(i;i<=n1;i++){
      //       if(i==k1){
      //         for(let j=k1;j>=0;j--){
      //            return a[j]
      //         }
      //       }
      //       // k1=k1+3
      //       // i=k1
      //     }
      // }
    }
  return (
    <div>
        <h1>binary search</h1>
        <Binarysearch/>
        {/* <ReverseInGroups/> */}
    </div>
  )
}
