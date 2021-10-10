import React from 'react'
import './header.css'
import './App.css'




const Header = () => {
    
    return (
        <div className = 'Header'>
            <h1 className = 'header-item'>Let's Play <span>TIC-TAC-TOE</span> 👉</h1>
            <button className = 'header-item'> Restart</button>

        </div>
    )
}

export default Header;
