import {useEffect, useState} from"react"
// import { Card } from "semantic-ui-react";



function Table({numberBet,setNumberBet, bank, setBank}){
    //const [betCount,setBetCount]=useState(0)

    // Object.entries(numberBet).forEach(([number, bet]) => {
    //   console.log(number, bet)
    //  })

  const handleIncClick=(value)=>{
    //console.log()
    //console.log(value)
    //console.log(value[0])
    //console.log(value[1])
    const newKey = value[0]
    //console.log(typeof(newKey))
    const newIncrement = value[1]+10
    setBank(bank - 10)
    //const newValue = {value[0]: value[1]+1}
    //console.log(numberBet)
    setNumberBet({...numberBet, 
      [newKey] : newIncrement})
  }

  const handleDecClick=(value)=>{
     if (value[1] >= 10) {
    const newKey = value[0]
    const newDecrement = value[1]-10
    setBank(bank + 10)
    setNumberBet({...numberBet,
      [newKey] : newDecrement})
  }
}
 // console.log(numberBet)  

  
    return (
       
      Object.entries(numberBet).map((values) => {
      
       return (
        <>
             
            <button onClick={(event) =>handleDecClick(values)}>-</button>
            {values[0]}
            <button onClick={(event) =>handleIncClick(values)}>+</button> 
            {values[1]}
        </>
          
       )

       }) 
    )

      }
    
      export default Table;
      