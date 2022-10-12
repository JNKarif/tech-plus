import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
       <nav>
        <Link to='/'>Menu</Link>
        <Link to='/quiz'>Quiz</Link>
        <Link to='/info'>Info</Link>
        <Link to='/blog'>Blog</Link>
       </nav>
    );
};

export default Header;