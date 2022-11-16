
// import './App.css';
import LeaderBoard from './LeaderBoard';
import BettingBoard from './BettingBoard';
import Table from './Table';
import {useState} from "react"
import Home from './Home'

function App() {
  const [numberBet, setNumberBet] = useState({
    "0":0, "00":0,
    "1":0, "4":0, "7":0, "10":0, "13":0, "16":0, "19":0, "22":0, "25":0, "28":0, "31":0, "34":0,
    "2":0, "5":0, "8":0, "11":0, "14":0, "17":0, "20":0, "23":0, "26":0, "29":0, "32":0, "35":0,
    "3":0, "6":0, "9":0, "12":0, "15":0, "18":0, "21":0, "24":0, "27":0, "30":0, "33":0, "36":0
  });

  




  
  return (<>
  <Table numberBet={numberBet} setNumberBet={setNumberBet}/>
  <Home />
  <LeaderBoard/>
  </>)
}

export default App;
