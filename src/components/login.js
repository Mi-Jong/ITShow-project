import '../css/style.css';
import styles from '../css/login.module.css';
import { GoX } from "react-icons/go";

function Login(props) {
    return (
        <section id='login' className={styles.login}>
            <div className={styles.loginInner}>
                <div className={styles.innerHeader}>
                    <span>닉네임 설정</span>
                    <GoX style={{ paddingRight: "20px" }} />
                </div>
                <div className={styles.innerCont}>
                    <h1>랭킹에 기록될 닉네임을 입력해주세요.</h1>
                    <input type="text" placeholder="닉네임을 입력해주세요" className={styles.nameInput}></input>
                    <p>
                        * 닉네임은 한글/영어 최소 2자, 최대 10자까지 입력 가능하며,
                    </p>
                    <p>
                        특수문자나 공백은 사용이 불가합니다.
                    </p>
                    <button className={styles.nextButton}>
                        확인
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Login;