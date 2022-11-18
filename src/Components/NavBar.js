import React from "react";
import { NavLink } from "react-router-dom"

const linkStyles = {
    display: "inline-grid",
    padding: "12px",
    margin: "1px 5px 5px",
    background: "black",
    textDecoration: "none",
    color: "white",
    borderRadius: "10px",

};


function NavBar({ onChangePage }) {
    function handleLinkClick(e) {
        e.preventDefault();
        onChangePage(e.target.pathname)
    }

    return (
        <div className ="NavBar">
            {/* <nav > */}
                <NavLink style={linkStyles} exact to="/">Home</NavLink>
                <NavLink style={linkStyles} to="/bettingboard"> PLAY!</NavLink>
                <NavLink style={linkStyles} to='/leaderboard'> Leaderboard</NavLink>

            {/* </nav> */}
        </div>
    )
}

export default NavBar;