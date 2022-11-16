
import {useState} from "react"



function  BettingBoard({bank,setBank}){
    const [betPlaced,setBetPlaced] =useState(0);
    const [numberBet,setNumberBet] = useState([]);
    const [outcome,setOutcome] =useState(0);
    // const [straightUps, setStraightUps] = useState({
    //     "0":0, "00":0,
    //     "1":0, "4":0, "7":0, "10":0, "13":0, "16":0, "19":0, "22":0, "25":0, "28":0, "31":0, "34":0,
    //     "2":0, "5":0, "8":0, "11":0, "14":0, "17":0, "20":0, "23":0, "26":0, "29":0, "32":0, "35":0,
    //     "3":0, "6":0, "9":0, "12":0, "15":0, "18":0, "21":0, "24":0, "27":0, "30":0, "33":0, "36":0
    //   });
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
        setBank(bank-parseInt(betPlaced))
        console.log(bank)
        console.log(numberSelected)
        if(parseInt(numberBet)===numberSelected){
            let payOut= betPlaced*35
            setBank(bank=>bank+payOut)
            console.log(`Congrats you won $${payOut} you now have $${bank}!`)
        }
    }

return(
    <div>
        <h1>Total Money Bet</h1>
        <form onSubmit={handleSubmit} >
            <input onChange={handleChange} value={betPlaced}type="text"></input>
            
            <h2>Place your number</h2>
            <input onChange={handleNumberChange}type="text" value={numberBet}></input>
            <button type="submit" >Submit</button>
            <p>${bank}</p>
        </form>
       
    </div>

)

    

}
export default BettingBoard


// useEffect(() => {
//     let allPayouts = 0;
//     if (winningNumber) {
//       setIsWheelSpinning(false);
//       switch (winningNumber) {
//         case "0":
//           allPayouts =
//             straightUps["0"] * 35 +
//             straightUps["0"] +
//             (splits["0-00"] * 17 + splits["0-00"]) +
//             (splits["0-1"] * 17 + splits["0-1"]) +
//             (streets["0-00-2"] * 11 + streets["0-00-2"]) +
//             (streets["0-1-2"] * 11 + streets["0-1-2"]) +
//             (basket * 6 + basket);
//           break;
//         case "1":
//           allPayouts =
//             straightUps["1"] * 35 +
//             straightUps["1"] +
//             (splits["0-1"] * 17 + splits["0-1"]) +
//             (splits["1-2"] * 17 + splits["1-2"]) +
//             (splits["1-4"] * 17 + splits["1-4"]) +
//             (streets["0-1-2"] * 11 + streets["0-1-2"]) +
//             (streets["1-2-3"] * 11 + streets["1-2-3"]) +
//             (corners["1-2-4-5"] * 8 + corners["1-2-4-5"]) +
//             (basket * 6 + basket) +
//             (doubleStreets["1 to 6"] * 5 + doubleStreets["1 to 6"]) +
//             columns["1st column"] * 3 +
//             dozens["1st dozen"] * 3 +
//             oddEven["odd"] * 2 +
//             highLow["low"] * 2 +
//             redBlack["red"] * 2;
//           break;
//         case "2":
//           allPayouts =
//             straightUps["2"] * 35 +
//             straightUps["2"] +
//             (splits["1-2"] * 17 + splits["1-2"]) +
//             (splits["2-3"] * 17 + splits["2-3"]) +
//             (splits["2-5"] * 17 + splits["2-5"]) +
//             (streets["00-2-3"] * 11 + streets["00-2-3"]) +
//             (streets["0-00-2"] * 11 + streets["0-00-2"]) +
//             (streets["0-1-2"] * 11 + streets["0-1-2"]) +
//             (streets["1-2-3"] * 11 + streets["1-2-3"]) +
//             (corners["1-2-4-5"] * 8 + corners["1-2-4-5"]) +
//             (corners["2-3-5-6"] * 8 + corners["2-3-5-6"]) +
//             (basket * 6 + basket) +
//             (doubleStreets["1 to 6"] * 5 + doubleStreets["1 to 6"]) +
//             columns["2nd column"] * 3 +
//             dozens["1st dozen"] * 3 +
//             oddEven["even"] * 2 +
//             highLow["low"] * 2 +
//             redBlack["black"] * 2;
//           break;


