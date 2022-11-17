
import {useState} from "react"
import Table from './Table'



function  BettingBoard({bank, setBank, numberBet, setNumberBet, resetNumberBet}){
    //const [betPlaced,setBetPlaced] =useState(0);
    //const [numberBet,setNumberBet] = useState([]);
    //const [outcome,setOutcome] =useState(0);

    // const numberBet =5;
    // const betPlaced =100;

// if(numberBet===numberSelected){
//     let payOut= betPlaced*35
//     console.log(`Congrats you won $${payOut}!`)
// }
    const [winningNumber, setWinningNumber] = useState(5)
    
    // function handleChange(e){
    //     setBetPlaced(e.target.value)
    //     console.log(betPlaced)
    // }
    // function handleNumberChange(e){
    //     setNumberBet(e.target.value)
    //     console.log(numberBet)
    // }
    //console.log(numberBet[1])
    
    function handleSubmit(e){
        
        setWinningNumber(Math.floor(Math.random()*37))
        e.preventDefault();
        //setBetPlaced(betPlaced)
        setNumberBet(numberBet)
        //console.log(betPlaced)
        //console.log(numberBet)
        
        //console.log(bank)
        const payOut = numberBet[winningNumber] *35
        //console.log(numberBet[winningNumber])
        
        //console.log(payOut)
        setBank(bank + payOut)

        setNumberBet(resetNumberBet)
        // Object.entries(numberBet).map((values) => {
        //     setNumberBet(values[1]=0)
        // })
        //console.log(numberSelected)
        // if(parseInt(numberBet)===winningNumber){
        //     let payOut= betPlaced*35
        //     setBank(bank=>bank+payOut)
            //console.log(`Congrats you won $${payOut} you now have $${bank}!`)
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
        </form>
        <Table bank={bank} setBank={setBank} numberBet={numberBet} setNumberBet={setNumberBet}/>
    </div>
    
)

}
export default BettingBoard


