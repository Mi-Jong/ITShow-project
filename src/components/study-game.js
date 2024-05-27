import React, { useEffect, useRef, useState } from "react";
import Header from './commonHeader';
import '../css/style.css';
import '../css/study-game.css';
import problems from '../Data/question.json';

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
};


function StudyGame() {
    const [count, setCount] = useState(30);
    const [active, setActive] = useState(true);
    const [currentProblem, setCurrentProblem] = useState(null);
    const [score, setScore] = useState(0);
    const [number, setnumber] = useState(1);

    const timer = useInterval(() => {
        if (active) {
            setCount(prevCount => {
                if (prevCount === 0) {
                    clearInterval(timer.current);
                    alert("게임이 종료되었습니다. 점수: " + score);
                    setActive(false);
                    return 0;
                } else {
                    return prevCount - 1;
                }
            });
        }
    }, 1000);

    useEffect(() => {
        setCurrentProblem(problems[Math.floor(Math.random() * problems.length)]);
    }, []);

    const handleAnswerClick = (answer) => {
        if (!active) return;

        if (answer === currentProblem.correctAnswer) {
            setScore(score + 1);
        }
        setCurrentProblem(problems[Math.floor(Math.random() * problems.length)]);
        setnumber(number + 1);
    };

    const timeBarStyle = {
        height: `${100 - (count / 30) * 100}%`,
        transition: "height 1s linear"
    };

    return (
        <>
            <Header />
            <div id="studyGame">
                <div className="rect">
                    <div className="question_number">Q{number}</div>
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