import React, { useState } from 'react'


export default function ParentAppcomponents({setselectvalue}) {
    // const [selctvalue,setselectvalue]=useState();
  return (
    <>
     <button onClick={()=>{setselectvalue("pizza")}} style={{background:'green', padding:"20px", borderRadius:10, border:'1px solid black', margin:10,color:'white'}}>PIzza</button>
     <button onClick={()=>{setselectvalue("Garlic")}} style={{background:'blue', padding:"20px", borderRadius:10, border:'1px solid black', margin:10,color:'white'}}>Garlic</button>
     <button onClick={()=>{setselectvalue("bread")}} style={{background:'black', padding:"20px", borderRadius:10, border:'1px solid black',margin:10,color:'white'}}>Onian</button>

   </>

  )
}
