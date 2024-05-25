import { useEffect, useRef, useState } from "react";
import '../css/style.css';
import '../css/study-game.css';
import Header from '../components/study-word/header';
//import '../logic/study-game-logic.js';


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


function StudyGame() {
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
        <>
            <Header/>
            <div id="studyGame">
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
            </div>
        </>

    );
}

export default StudyGame;