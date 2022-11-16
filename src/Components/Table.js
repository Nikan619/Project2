import {useState} from"react"
// import { Card } from "semantic-ui-react";


function Table({numberBet,setNumberBet}){
    const [currentInc,setInc]=useState(0)
  const handleIncClick=()=>{
    setInc(Inc=>Inc++)
    
  }


    return (
       
        <div>
            <button onClick={handleIncClick}>Increment</button>
            {currentInc}
            <button onClick={handleDecClick}>Decrement</button>
            0
            </div>
       
    )
   
}
export default Table;