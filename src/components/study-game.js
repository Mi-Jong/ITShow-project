import React, { useEffect, useRef, useState } from "react";
import Header from './commonHeader';
import '../css/style.css';
import '../css/study-game.css';

const useInterval = (callback, delay) => {
    const savedCallback = useRef(callback);
    const timer = useRef(null);

    useEffect(() => {
        savedCallback.current = callback;
    });

    useEffect(() => {
        if (delay === null) return;

        timer.current = setInterval(() => savedCallback.current(), delay);
        return () => clearInterval(timer.current);
    }, [delay]);

    return timer;
}

function StudyGame() {
    const [count, setCount] = useState(30);
    const [active, setActive] = useState(true);
    const [currentProblem, setCurrentProblem] = useState(null);
    const [userAnswer, setUserAnswer] = useState('');
    const [score, setScore] = useState(0);
    const problems = [
        {
            "problem": "기업의 경제 상태를 나타내는 주요 지표로, 매출, 이익율, 부채 등이 포함되는 것은?",
            "answers": ["펀더멘탈", "재무상태", "경제지표", "금융지표"],
            "correctAnswer": "펀더멘탈"
        },
        {
            "problem": "기업의 총 발행 주식수에 1주당 주가를 곱한 값으로, 시장에서 기업의 규모를 나타내는 것은?",
            "answers": ["시가총액", "시장규모", "주가지수", "자본금"],
            "correctAnswer": "시가총액"
        },
    ];

    const timer = useInterval(() => {
        if (active) {
            setCount(prevCount => {
                if (prevCount === 0) {
                    clearInterval(timer.current);
                    alert("게임이 종료되었습니다. 점수: " + score);
                    return 0;
                } else {
                    return prevCount - 1;
                }
            });
        }
    }, 1000);

    useEffect(() => {
        // 문제 선택
        const randomIndex = Math.floor(Math.random() * problems.length);
        setCurrentProblem(problems[randomIndex]);
    }, []);

    const handleAnswerClick = (answer) => {
        if (answer === currentProblem.correctAnswer) {
            setScore(score + 1);
        }
        setCurrentProblem(problems[Math.floor(Math.random() * problems.length)]);
    };

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
                    <div className="question">{currentProblem ? currentProblem.problem : '문제가 없습니다.'}</div>
                    <div className="answers">
                        {currentProblem && currentProblem.answers.map((answer, index) => (
                            <button className="answer" key={index} onClick={() => handleAnswerClick(answer)}>{answer}</button>
                        ))}
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
