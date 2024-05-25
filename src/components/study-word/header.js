import React from 'react'
import { IoExitOutline } from "react-icons/io5";
import { GoQuestion } from "react-icons/go";
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  
  const getLinkPath = () => {
    switch (location.pathname) {
      case '/StudyWord':
        return '/';
      case '/StudyWordDetail':
        return '/StudyWord';
      case '/StudyGame':
        return '/StudyWord';
      default:
        return '/';
    }
  };

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
                <GoQuestion size= "1.3em"/>
              </li>
              <li>
                <Link to={getLinkPath()}><IoExitOutline size= "1.3em" /></Link>
              </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
