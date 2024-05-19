import React from 'react';
import '../css/style.css';
import '../css/header.css';
import headerNav from '../Data/header.json';
function header() {

    return (
        <header id="header" role="banner">
        <div className="header__inner">
          <div className="header__logo">
            <h1>
              <a href="/">GEMMI</a>
            </h1>
          </div>
          <nav 
            className= 'header__nav'
            role="navigation" 
            aria-label="메인메뉴"
          >
            <ul>
              {headerNav.map((nav, key) => (
                <li key={key}>
                  <a href={nav.url}>{nav.title}</a>
                </li>
                
              ))}
            </ul>
          </nav>
        </div>
      </header>
    );
}

export default header;
