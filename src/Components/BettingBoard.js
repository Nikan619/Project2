
import {useState} from "react"
import Board from './Board'



function  BettingBoard({bank, setBank, numberBet, setNumberBet, resetNumberBet}){
  
   
    const [winningNumber, setWinningNumber] = useState(1)
    
   
    let winnerMessage="Good Job!";
    const [payOut,setPayout]=useState(0)
    
    
    
    function handleSubmit(e){
        setPayout(payOut*0)
        setWinningNumber(Math.floor(Math.random()*36))
      
        e.preventDefault();
       
        setNumberBet(numberBet=>numberBet)
      
        setPayout((payOut)=>payOut+numberBet[winningNumber] *35)
        let winnerMessage="";
        if (payOut > 0) {
            winnerMessage = `You’ve won $ ${payOut}`;
        }

        
        setBank(bank=>bank + payOut)

        setNumberBet(resetNumberBet)

        

        console.log(numberBet)
        console.log(winningNumber)
       
        }
    




return(
    <div>
        <h1>Total Money Bet</h1>
        <form onSubmit={handleSubmit} >
            {/* <input onChange={handleChange} value={betPlaced}type="text"></input>
            
            <h2>Place your number</h2>
            <input onChange={handleNumberChange}type="text" value={numberBet}></input> */}
            <button type="submit" >Spin the Wheel</button>
            <p>${bank}</p>
            <p>The Winning Number is {winningNumber}</p>
            {payOut? <p>{`${winnerMessage}+$${payOut}`}</p>: <p>Take a spin.</p>}
        
        </form>
        <Board bank={bank} setBank={setBank} numberBet={numberBet} setNumberBet={setNumberBet}/>
    </div>
    
)

}
export default BettingBoard


