
import {useState} from "react"



function  BettingBoard({bank,setBank}){
    const [betPlaced,setBetPlaced] =useState(0);
    const [numberBet,setNumberBet] = useState(0);
    const [outcome,setOutcome] =useState(0);
    // const numberBet =5;
    // const betPlaced =100;
    
   

// if(numberBet===numberSelected){
//     let payOut= betPlaced*35
//     console.log(`Congrats you won $${payOut}!`)
// }
  
    
    function handleChange(e){
        setBetPlaced(e.target.value)
        console.log(betPlaced)
    }
    function handleNumberChange(e){
        setNumberBet(e.target.value)
        console.log(numberBet)
    }
    function handleSubmit(e){
        let numberSelected=Math.floor(Math.random()*6)
        e.preventDefault();
        setBetPlaced(betPlaced)
        setNumberBet(numberBet)
        console.log(betPlaced)
        console.log(numberBet)
        setBank(bank-parseInt(numberBet))
        console.log(bank)
        console.log(numberSelected)
        if(parseInt(numberBet)===numberSelected){
            let payOut= betPlaced*35
            console.log(`Congrats you won $${payOut}!`)
        }
    }

return(
    <div>
        <h1>Place your bet</h1>
        <form onSubmit={handleSubmit} >
            <input onChange={handleChange} value={betPlaced}type="text"></input>
            
            <h2>Place your number</h2>
            <input onChange={handleNumberChange}type="text" value={numberBet}></input>
            <button type="submit" >Submit</button>
        </form>
       
    </div>

)

    

}
export default BettingBoard