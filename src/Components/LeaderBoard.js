import BettingBoard from "./BettingBoard";
import {useState} from "react"
import PlayerScore from "./PlayerScore"

function LeaderBoard({playerList,setplayerList}) {
    const sortPlayers = playerList.sort((a,b)=> b.bank - a.bank )
    const displayPlayer = sortPlayers.map((playercred)=>{
        return(
        <PlayerScore
        key = {playercred.id}
        scorename = {playercred.Player}
        scorebank = {playercred.bank}
        />
      )
      })
    


return (

    <div>
    {displayPlayer}
    </div>

)
}

export default LeaderBoard;


