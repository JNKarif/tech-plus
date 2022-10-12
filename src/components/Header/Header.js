import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
       <nav>
        <p>Tech Plus</p>
        <Link to='/'>Main</Link>
        <Link to='/quiz/1'>Quiz</Link>
        <Link to='/info'>Info</Link>
        <Link to='/blog'>Blog</Link>
       </nav>
    );
};

export default Header;