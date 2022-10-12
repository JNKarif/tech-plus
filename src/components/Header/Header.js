import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (




        <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">Tech Plus</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
      <li> <Link to='/'>Main</Link></li>
      <li tabIndex={0}>
        <a>
          Parent
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" 
          width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-base-100">
          <li><Link to='/info'>Info</Link></li>
          <li><Link to='/quiz/1'>Quiz</Link></li>
        </ul>
      </li>
      <li><Link to='/blog'>Blog</Link></li>
    </ul>
  </div>
</div>
    //    <nav>
    //     <p>Tech Plus</p>
    //    
    //    
    //     
    //     
    //    </nav>
    );
};

export default Header;