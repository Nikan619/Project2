import {useEffect, useState} from"react"
// import { Card } from "semantic-ui-react";



function Table({numberBet,setNumberBet}){
    //const [betCount,setBetCount]=useState(0)

    // Object.entries(numberBet).forEach(([number, bet]) => {
    //   console.log(number, bet)
    //  })

  const handleIncClick=(value)=>{
    //console.log()
    console.log(value)
    console.log(value[0])
    console.log(value[1])
    //const newValue = {value[0]: value[1]+1}
    console.log(numberBet)
    //setNumberBet(...numberBet, newValue)
  }

  const handleDecClick=()=>{
    // if (betCount >= 0)
    //setBetCount(betCount=>betCount-1)
  }
 // console.log(numberBet)  

  
    return (
       
      Object.entries(numberBet).map((values) => {
      
       return (
        <div>
            <button onClick={(event) =>handleDecClick(values)}>-</button>
            {values[0]}
            <button onClick={(event) =>handleIncClick(values)}>+</button> 
            {values[1]}
        </div>
          
       )

       }) 
    )

      }
    

export default Table;