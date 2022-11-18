
import {useState,useEffect} from "react"
import Board from './Board'



function  BettingBoard({bank, setBank, numberBet, setNumberBet, resetNumberBet}){
  

    const [winningNumber, setWinningNumber] = useState(1)
    const [winningMessage,setWinningMessage]=useState(false)
    
   
 
    const [payOut,setPayout]=useState(0)
    
    const resetPayOut=0
    
     function handleSubmit(e){
        e.preventDefault()
        
        let randomNumber =Math.floor(Math.random()*37)
         setWinningNumber(randomNumber)
      
      
       
        // setNumberBet(numberBet=>numberBet)
      let winnings= payOut+numberBet[randomNumber] *35
        setPayout((winnings))

       
        
        

        
        setBank(bank=>bank + winnings)

          setNumberBet(resetNumberBet)
        if(winnings>0){
            setWinningMessage(!winningMessage)
        }else if(winnings===0){
            setWinningMessage(false)
        }

        setPayout(resetPayOut)
        console.log(randomNumber)
        console.log(winnings)

        
        }
    




return(
    <div>
        <h1>Total Money Bet</h1>
        <form onSubmit={handleSubmit} >
            {/* <input onChange={handleChange} value={betPlaced}type="text"></input>
            
            <h2>Place your number</h2>
            <input onChange={handleNumberChange}type="text" value={numberBet}></input> */}
            <button className="roulette"type="submit" >Spin the Wheel</button>
            <p>${bank}</p>
            <p>The Winning Number is {winningNumber}</p>
            {winningMessage? <p>{`You won baby!!! ` }</p>: <p>Take a spin.</p>}
        
        </form>
        <Board bank={bank} setBank={setBank} numberBet={numberBet} setNumberBet={setNumberBet}/>
    </div>
    
)

}
export default BettingBoard


