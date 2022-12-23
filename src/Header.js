import React from 'react';
import { Link } from 'react-router-dom';
import './style/Header.css';

const Header = ({current, setCurrent}) => {

    const changeCurrent = event => {
        setCurrent(event.target.id);
        sessionStorage.setItem('current', event.target.id);
    }

    return (
        <div id="header">
            <Link to='/' className={current==='link-1'? 'active-link':'link'} id='link-1' onClick={changeCurrent}>Home</Link>
            <Link to='/aboutme' className={current==='link-2'? 'active-link':'link'} id='link-2' onClick={changeCurrent}>About Me</Link>
            <Link to='/portfolio' className={current==='link-3'? 'active-link':'link'} id='link-3' onClick={changeCurrent}>Project Portfolio</Link>
        </div>
    )
}

export default Header;