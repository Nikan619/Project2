import BettingBoard from "./BettingBoard";
import {useState} from "react"


function LeaderBoard({bank, setBank, numberBet, setNumberBet, resetNumberBet}) {


return (
<BettingBoard bank={bank} setBank={setBank} numberBet={numberBet} setNumberBet={setNumberBet} resetNumberBet={resetNumberBet}/>
)
}

export default LeaderBoard;


