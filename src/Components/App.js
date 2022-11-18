
import '../App.css';
import LeaderBoard from './LeaderBoard';
import BettingBoard from './BettingBoard';
import Table from './Table';
import {useState,useEffect} from "react"
import Home from './Home'
import {Switch,Route} from "react-router-dom";
import NavBar from "./NavBar";



function App() {
  const[playerList, setplayerList]=useState([])
  const [bank ,setBank]=useState(500)
  const [numberBet, setNumberBet] = useState({
    "0":0, "00":0,
    "1":0, "4":0, "7":0, "10":0, "13":0, "16":0, "19":0, "22":0, "25":0, "28":0, "31":0, "34":0,
    "2":0, "5":0, "8":0, "11":0, "14":0, "17":0, "20":0, "23":0, "26":0, "29":0, "32":0, "35":0,
    "3":0, "6":0, "9":0, "12":0, "15":0, "18":0, "21":0, "24":0, "27":0, "30":0, "33":0, "36":0
  });

  const resetNumberBet = {
    "0":0, "00":0,
    "1":0, "4":0, "7":0, "10":0, "13":0, "16":0, "19":0, "22":0, "25":0, "28":0, "31":0, "34":0,
    "2":0, "5":0, "8":0, "11":0, "14":0, "17":0, "20":0, "23":0, "26":0, "29":0, "32":0, "35":0,
    "3":0, "6":0, "9":0, "12":0, "15":0, "18":0, "21":0, "24":0, "27":0, "30":0, "33":0, "36":0
  }

  useEffect(()=>{
    fetch('http://localhost:3000/Players')
    .then(r => r.json())
    .then(data => {

      setplayerList(data)
    })
  },[])
  function handlebankChange(id, correctIndex) {
    fetch(`http://localhost:3000/Players`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ correctIndex }),
    })
      .then((r) => r.json())
      .then((updatedbank) => {
        const updatedScore = playerList.map((q) => {
          if (q.id === updatedbank.id) return updatedbank;
          return q;
        });
        setBank(updatedScore);
      });
  }

  
  return (
  <div className="App">
  <NavBar/>
  <Switch>
  <Route path="/bettingboard">
  <BettingBoard bank={bank} setBank={setBank} numberBet={numberBet} setNumberBet={setNumberBet} resetNumberBet={resetNumberBet}/>
  </Route>
  <Route path="/leaderboard">
    <LeaderBoard setplayerList={setplayerList} playerList={playerList} />
    </Route>
  <Route path="/">
  <Home />
  </Route>
  </Switch>
  </div>)
}

export default App;
