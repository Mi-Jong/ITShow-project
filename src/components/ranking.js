import React, { useEffect, useState } from 'react';
import '../css/style.css';
import Header from './commonHeader';
import styles from '../css/ranking.module.css';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function Ranking(props) {
    const [rankings, setRankings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [type, setType] = useState('');
    const [highlightedRow, setHighlightedRow] = useState(null); // 최근 useridx 상태 추가
    const userName = localStorage.getItem('userName');
    const location = useLocation();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const gameType = searchParams.get('type'); // 'type' 파라미터 확인
        setType(gameType); // 'type' 상태 설정

        const endpoint = gameType === 'Virtual' ? '/api/virtualRanking' : '/api/wordRanking'; // 올바른 엔드포인트 사용

        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000${endpoint}`);
                const data = response.data;
                setRankings(data);
                
                // 각 username 별로 가장 높은 useridx를 찾기
                const maxUseridxPerUsername = {};
                data.forEach(item => {
                    const { username, useridx } = item;
                    if (!(username in maxUseridxPerUsername) || useridx > maxUseridxPerUsername[username]) {
                        maxUseridxPerUsername[username] = useridx;
                    }
                });

                // 가장 높은 useridx 선택
                let maxUseridx = null;
                Object.keys(maxUseridxPerUsername).forEach(username => {
                    if (maxUseridx === null || maxUseridxPerUsername[username] > maxUseridx) {
                        maxUseridx = maxUseridxPerUsername[username];
                    }
                });

                setHighlightedRow(maxUseridx);

                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, [location.search]);

    const calculateRanks = (rankings) => {
        let rank = 1;
        let result = [];

        for (let i = 0; i < rankings.length; i++) {
            if (i > 0 && rankings[i].Score !== rankings[i - 1].Score) { // Score 필드 확인
                rank = i + 1;
            }
            result.push({ ...rankings[i], rank: rank });
        }
        return result;
    };

    const rankedRankings = calculateRanks(rankings);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

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
                            <tr key={index} className={rank.useridx === highlightedRow ? styles.highlightedRow : null}>
                                <td>
                                    <div className={`${styles.rankNum} ${styles[`rankNum${rank.rank}`]}`}>{rank.rank}</div>
                                </td>
                                <td>{rank.username}</td>
                                <td>{rank.Score}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
}

export default Ranking;
