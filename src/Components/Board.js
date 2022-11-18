import { useEffect, useState } from "react"
// import { Card } from "semantic-ui-react";



function Board({ numberBet, setNumberBet, bank, setBank }) {
  //const [betCount,setBetCount]=useState(0)

  // Object.entries(numberBet).forEach(([number, bet]) => {
  //   console.log(number, bet)
  //  })

  const handleIncClick = (value) => {
    //console.log()

    const newKey = value[0]

    const newIncrement = value[1] + 10
    setBank(bank - 10)
    //const newValue = {value[0]: value[1]+1}

    setNumberBet({
      ...numberBet,
      [newKey]: newIncrement
    })
  }

  const handleDecClick = (value) => {
    if (value[1] >= 10) {
      const newKey = value[0]
      const newDecrement = value[1] - 10
      setBank(bank + 10)
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
