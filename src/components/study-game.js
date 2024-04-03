import { useEffect, useRef, useState } from "react";
import '../css/globals.css';
import Header from './header';
import Footer from './footer';
import '../css/study-game.css';
import '../logic/study-game-logic.js';


const useInterval = (callback, delay) => {
    const savedCallback = useRef(callback);

    useEffect(() => {
        savedCallback.current = callback;
    });

    useEffect(() => {
        if (delay === null) return;

        const timer = setInterval(() => savedCallback.current(), delay);
        return () => clearInterval(timer);
    }, [delay]);
}


function Main() {
    const [count, setCount] = useState(30);
    useInterval(() => {
        setCount(prevCount => {
            if (prevCount === 0) {
                return 0; // 카운트가 0이면 감소하지 않도록 설정
            } else {
                return prevCount - 1; // 0이 아니면 1씩 감소
            }
        });
    }, 1000); // 1초마다 호출하도록 수정

    const timeBarStyle = {
        height: `${100 - (count / 30) * 100}%`,
        transition: "height 1s linear"
    };


    return (
        <div className="rect">
            <div className="question_number">Q</div>
            <div className="question"></div>
            
            <div className="answer answer1">답1</div>
            <div className="answer answer2">답2</div>
            <div className="answer answer3">답3</div>
            <div className="answer answer4">답4</div>

            <div className="nextSection">
                <div className="next">다음</div>
            </div>

            <div id="timeBar">
                <div id="timer" style={timeBarStyle}></div>
            </div>
        </div>
    );
}

function App() {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;