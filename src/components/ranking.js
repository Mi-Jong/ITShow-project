import React, { useEffect, useState } from 'react';
import '../css/style.css';
import Header from './commonHeader';
import styles from '../css/ranking.module.css';
import axios from 'axios';

function Ranking(props) {
    const [rankings, setRankings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const userName = localStorage.getItem('userName');

    useEffect(() => {
        const userScore = localStorage.getItem('userScore');

        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/wordRanking');
                setRankings(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        fetchData();

        if (userName && userScore) {
            const newUserScore = parseInt(userScore, 10);
            const existingUserIndex = rankings.findIndex(rank => rank.name === userName);

            let updatedRankings;

            if (existingUserIndex !== -1) {
                updatedRankings = rankings.map((rank, index) => 
                    index === existingUserIndex ? { ...rank, score: newUserScore } : rank
                );
            } else {
                updatedRankings = [...rankings, { name: userName, score: newUserScore }];
            }

            const sortedRankings = updatedRankings.sort((a, b) => b.score - a.score);
            setRankings(sortedRankings);
        }
    }, [userName]);

       

    const calculateRanks = (rankings) => {
        let rank = 1;
        let result = [];
    
        for (let i = 0; i < rankings.length; i++) {
            if (i > 0 && rankings[i].wordGame !== rankings[i - 1].wordGame) {
                rank = i + 1;
            }
            result.push({ ...rankings[i], rank: rank });
        }
        return result;
    };

    const rankedRankings = calculateRanks(rankings);

    return (
        <div className='body'>
            <Header />
            <section className={styles.ranking}>
                <table className={styles.rank}>
                    <thead>
                        <tr>
                            <th scope="col">순위</th>
                            <th scope="col">닉네임</th>
                            <th scope="col">점수</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rankedRankings.map((rank, index) => (
                            <tr key={index} className={rank.name === userName ? styles.highlightedRow : null}>
                                <td>
                                    <div className={`${styles.rankNum} ${styles[`rankNum${rank.rank}`]}`}>{rank.rank}</div>
                                </td>
                                <td>{rank.username}</td>
                                <td>{rank.wordGame}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
}

export default Ranking;
