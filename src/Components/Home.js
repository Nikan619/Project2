import React, { useState } from "react";
function Home() {
    const [newPlayer, setNewPlayer] = useState({
        Player: "",
        bank: 500
    });
    function handleChange(e) {
        // console.log(e.target.value)
        setNewPlayer({
            ...newPlayer,
            [e.target.name]: e.target.value
        })
    }
    function handleSubmit(e) {
        e.preventDefault()
        console.log(newPlayer)
        const newPlayerEntry = {
            id: "",
            Player: newPlayer.Player,
            bank: newPlayer.bank
        }
        // console.log(newPlayer.PlayerName)
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPlayerEntry)
        }
        fetch('http://localhost:3000/Players', configObj)
            .then(r => r.json())
            .then(playerData => {
                console.log(playerData)
                setNewPlayer(playerData)
            })
        alert(`welcome ${newPlayer.Player}`)
    }
    return (
        <div>
            <section className="homepage" >
                <h1> Enter Your name</h1>
                <form onSubmit={handleSubmit} >
                    <input type="text"
                        name="Player"
                        value={newPlayer.PlayerName}
                        onChange={handleChange}
                    />
                    <button type="submit">Create Player</button>
                </form>
            <section>
                <h2>Welcome to Roulette! </h2>
                <h4>Each player will start with $500 and each bet is $10. You can place as many bets as you want on  any numbers. Spin the wheel to make big money! </h4>
                <p>*Disclaimer: House always wins! </p>
                </section>
            </section>
        </div>
    )
}
export default Home