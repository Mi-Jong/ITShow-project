import React, { useState } from 'react';
import { IoExitOutline } from "react-icons/io5";
import { GoQuestion } from "react-icons/go";
import { Link, useLocation } from 'react-router-dom';
import StudyVirtualExp from './studyVirtualExp.js';

const Header = () => {
  const location = useLocation();
  const [showExp, setShowExp] = useState(false);

  const handleGoQuestionClick = () => {
    if (location.pathname === '/StudyVirtual') {
      setShowExp(true);
    } else {
      setShowExp(false);
    }
  };

  const handleCloseExp = () => {
    setShowExp(false);
  };

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
    <>
      <header id="header" role="banner">
        <div className="header__inner">
          <div className="header__logo">
            <h1>
              <a href="/">GEMMI</a>
            </h1>
          </div>
          <nav 
            className='header__nav'
            role="navigation" 
            aria-label="메인메뉴"
          >
            <ul>
              <li>
                <a><GoQuestion size="1.3em" onClick={handleGoQuestionClick} /></a>
              </li>
              <li>
                <a>
                  <Link to={getLinkPath()} onClick={handleCloseExp}>
                    <IoExitOutline size="1.3em" />
                  </Link>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {showExp && <StudyVirtualExp onClose={handleCloseExp} />}
    </>
  );
}

export default Header;
