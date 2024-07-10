import React, { useState } from 'react'
import ParentAppcomponents from './ParentAppcomponents'
import PizzaComponets from './PizzaComponets';
import GarlicComponets from './GarlicComponets';
import BreadComponets from './BreadComponets';

export default function ParentMaincomponents() {
    const [value,setselectvalue]=useState('pizza');
const randercount =()=>{
    switch(value){
        case 'pizza':
        return <PizzaComponets/>;
         
        case 'Garlic':
        return <GarlicComponets/>;

         case 'bread':
            return <BreadComponets/>;

        default:
            <PizzaComponets/>
    }
   

}
  return (
    <div>
   <ParentAppcomponents setselectvalue={setselectvalue} />

   <div>
    <h1>Randercount</h1>
    {randercount()}
     </div>
   </div>

  
  )
}
