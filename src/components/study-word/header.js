import React from 'react'
import { IoExitOutline } from "react-icons/io5";
import { GoQuestion } from "react-icons/go";

const Header = () => {
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
            <li>
              <a href=""><GoQuestion size= "1.3em"/></a>
            </li>
            <li>
              <a href=""><IoExitOutline size= "1.3em" /></a>
            </li>
        </ul>
      </nav>
    </div>
  </header>
  )
}

export default Header