import React from "react";
import {NavLink} from "react-router-dom"

function NavBar({onChangePage})
{
    function handleLinkClick(e){
        e.preventDefault();
        onChangePage(e.target.pathname)
    }

    return(
    <nav>
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/bettingboard"> PLAY!</NavLink>
        <NavLink to='/leaderboard'> Leaderboard</NavLink>

    </nav>
    )
}

export default NavBar;