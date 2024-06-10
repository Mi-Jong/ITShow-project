import React, { useEffect, useRef, useState } from "react";
import Header from './commonHeader';
import Login from './login';
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
    const [count, setCount] = useState(5);
    const [active, setActive] = useState(true);
    const [currentProblem, setCurrentProblem] = useState(null);
    const [score, setScore] = useState(0);
    const [number, setnumber] = useState(1);
    const [gameOver, setGameOver] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    const timer = useInterval(() => {
        if (active) {
            setCount(prevCount => {
                if (prevCount === 0) {
                    clearInterval(timer.current);
                    setActive(false);
                    setGameOver(true);
                    setShowLogin(true);
                    localStorage.setItem('userScore', score); 
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
            setScore(score + 10);
        }
        setCurrentProblem(problems[Math.floor(Math.random() * problems.length)]);
        setnumber(number + 1);
    };

    const handleMouseLeave = () => {
        setActive(false);
    };

    const handleMouseEnter = () => {
        setActive(true);
    };

    const timeBarStyle = {
        height: `${100 - (count / 5) * 100}%`,
        transition: "height 1s linear"
    };


    return (
        <>
            <Header />
            <div id="studyGame" className="studyGame" onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}>
                <div className="rect">
                    <div className="question_number">Q{number}.</div>
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
            </div>{showLogin && (window.location.href = '/Login?Word')}
                            
        </>
    );
}

export default StudyGame;
