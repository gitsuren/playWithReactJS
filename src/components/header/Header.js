import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Play with ReactJS - Learning!</h1>
            <Link style={linkStyle} to="/">Home/TodoList</Link>
            | <Link style={linkStyle} to="/login">Logged In?</Link>
            | <Link style={linkStyle} to="/contactCardList">ContactCard</Link>
            | <Link style={linkStyle} to="/jokeList">Joke</Link>
            | <Link style={linkStyle} to="/productList">Product</Link>
            | <Link style={linkStyle} to="/eventsInReact">Events</Link>
            | <Link style={linkStyle} to="/apiFetch">ApiFetch</Link>
            | <Link style={linkStyle} to="/formContainer">Forms</Link>
            | <Link style={linkStyle} to="/meme">Meme Generator</Link>
            | <Link style={linkStyle} to="/about">About</Link>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header;