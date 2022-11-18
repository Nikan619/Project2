
import {useState,useEffect} from "react"
import Board from './Board'

function  BettingBoard({bank, setBank, numberBet, setNumberBet, resetNumberBet}){

    const [winningNumber, setWinningNumber] = useState(1)
    const [winningMessage,setWinningMessage]=useState(false)
    const [totalMoneyBet, setTotalMoneyBet] = useState(0)
    
    const [payOut,setPayout]=useState(0)
    
    const resetPayOut=0
    
     function handleSubmit(e){
        e.preventDefault()
        
        let randomNumber =Math.floor(Math.random()*37)
         setWinningNumber(randomNumber)
      
        let winnings= payOut+numberBet[randomNumber] *35

        setPayout((winnings))
        setTotalMoneyBet(0)
        setBank(bank=>bank + winnings)

          setNumberBet(resetNumberBet)
        if(winnings>0){
            setWinningMessage(!winningMessage)
        }else if(winnings===0){
            setWinningMessage(false)
        }

        setPayout(resetPayOut)
        }
    
return(
    <div>
        <h1>Total Money Bet ${totalMoneyBet}</h1>
        <form onSubmit={handleSubmit} >

            <button className="roulette"type="submit" >SPIN THE WHEEL</button>
            <h2>Bank ${bank}</h2>
            <h2>The Winning Number is {winningNumber}</h2>
            {winningMessage? <h2>{`You won baby!!! ` }</h2>: <h2>Take a spin.</h2>}

        </form>
        <Board bank={bank} setBank={setBank} numberBet={numberBet} setNumberBet={setNumberBet} totalMoneyBet={totalMoneyBet} setTotalMoneyBet={setTotalMoneyBet}/>

    </div>
    
)

}
export default BettingBoard


