import BettingBoard from "./BettingBoard";
import {useState} from "react"


function LeaderBoard({bank, setBank, numberBet, setNumberBet}) {


return (
<BettingBoard bank={bank} setBank={setBank} numberBet={numberBet} setNumberBet={setNumberBet}/>
)
}










export default LeaderBoard;


