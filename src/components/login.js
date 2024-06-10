import '../css/style.css';
import styles from '../css/login.module.css';
import { GoX } from "react-icons/go";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login(props) {
    const [userName, setUserName] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const getLinkPath = () => {
        const searchParams = new URLSearchParams(window.location.search);
        const gameParamExists = searchParams.has('Game'); // 'has'를 사용하여 존재 여부만 확인
        console.log('Full query string:', window.location.search); // 전체 쿼리 스트링 출력
        console.log('Game parameter exists:', gameParamExists); // 'Game' 파라미터 존재 여부 출력

        if (gameParamExists) { // 파라미터가 존재하는지만 체크
            return '/Ranking';
        }
        return '/';
    };

    const handleInputChange = (e) => {
        setUserName(e.target.value);
    };

    const validateUserName = (name) => {
        const regex = /^[가-힣a-zA-Z]{2,10}$/;
        return regex.test(name);
    }



    const handleConfirmClick = async () => {
        if (validateUserName(userName)) {
            const userScore = localStorage.getItem('userScore');

            try {
                await axios.post('http://localhost:5000/api/saveUser', { userName, userScore });
                localStorage.setItem('userName', userName);
                navigate(getLinkPath());
            } catch (error) {
                console.error('Error saving user name and score to the database:', error);
                alert("사용자 이름과 점수를 저장하는 중에 오류가 발생했습니다.");
            }
        } else {
            alert("이름을 다시 입력해주세요.");
        }
    };

    return (
        <section id='login' className={styles.login}>
            <div className={styles.loginInner}>
                <div className={styles.innerHeader}>
                    <span>닉네임 설정</span>
                    <button 
                        onClick={() => navigate(getLinkPath())} 
                        style={{ paddingRight: "20px", background: 'none', border: 'none', cursor: 'pointer' }}
                    >
                        <GoX size="25" />
                    </button>
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
                    <button 
                        className={styles.nextButton}
                        onClick={handleConfirmClick}
                    >
                        확인
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Login;
