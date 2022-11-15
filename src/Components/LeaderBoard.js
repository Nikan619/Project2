import BettingBoard from "./BettingBoard";
import {useState} from "react"


function LeaderBoard() {
  const [bank ,setBank]=useState(500)

return (
<BettingBoard bank={bank} setBank={setBank}/>
)
}










export default LeaderBoard;


