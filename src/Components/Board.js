import { useEffect, useState } from "react"


function Board({ numberBet, setNumberBet, bank, setBank, totalMoneyBet, setTotalMoneyBet }) {

  const handleIncClick = (value) => {
    if (bank>0){
    const newKey = value[0]

    const newIncrement = value[1] + 10
    setBank(bank - 10)
    setTotalMoneyBet(totalMoneyBet+10)

    setNumberBet({
      ...numberBet,
      [newKey]: newIncrement
    })
    }
  }

  const handleDecClick = (value) => {
    if (value[1] >= 10) {
      const newKey = value[0]
      const newDecrement = value[1] - 10
      setBank(bank + 10)
      setTotalMoneyBet(totalMoneyBet-10)
      setNumberBet({
        ...numberBet,
        [newKey]: newDecrement
      })
    }
  }




  return (

    Object.entries(numberBet).map((values) => {
      return (
        
          <td style={{ border: "3px solid black" }}>
            <div className="numbers">
            {values[0]}
            <button className="Plus" onClick={(event) => handleIncClick(values)}>+</button>

            <button className="minus" onClick={(event) => handleDecClick(values)}> - </button>
            {values[1]}
            <br></br>
            </div>
          </td>
      
      )

    })
  )
}






export default Board;
