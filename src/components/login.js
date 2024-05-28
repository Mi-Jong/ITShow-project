import '../css/style.css';
import styles from '../css/login.module.css';
import { GoX } from "react-icons/go";
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Login(props) {
    const [userName, setUserName] = useState("");

    const location = useLocation();
  
    const getLinkPath = () => {
      switch (location.pathname) {
        case '/StudyGame':
          return '/Ranking';
        default:
          return '/';
      }
    };

    const handleInputChange = (e) => {
        setUserName(e.target.value);
    };

    const handleConfirmClick = () => {
        localStorage.setItem('userName', userName);
    };
  

    return (
        <section id='login' className={styles.login}>
            <div className={styles.loginInner}>
                <div className={styles.innerHeader}>
                    <span>닉네임 설정</span>
                    <Link to={getLinkPath()} ><GoX style={{ paddingRight: "20px" }} /></Link>
                </div>
                <div className={styles.innerCont}>
                    <h1>랭킹에 기록될 닉네임을 입력해주세요.</h1>
                    <input 
                        type="text" 
                        placeholder="닉네임을 입력해주세요" 
                        className={styles.nameInput}
                        value={userName}
                        onChange={handleInputChange}
                    />
                    <p>
                        * 닉네임은 한글/영어 최소 2자, 최대 10자까지 입력 가능하며,
                    </p>
                    <p>
                        특수문자나 공백은 사용이 불가합니다.
                    </p>
                    <Link to={getLinkPath()} >
                        <button 
                            className={styles.nextButton}
                            onClick={handleConfirmClick}
                        >
                            확인
                        </button>
                    </Link>
                    
                </div>
            </div>
        </section>
    );
}

export default Login;