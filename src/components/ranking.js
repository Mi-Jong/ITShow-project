import React, { useEffect, useState } from 'react';
import '../css/style.css';
import Header from './commonHeader';
import Footer from './footer';
import styles from '../css/ranking.module.css';
import initialRankings from '../Data/ranking.json';

function Ranking(props) {
    const [rankings, setRankings] = useState(initialRankings);

    useEffect(() => {
        // 로컬 스토리지에서 사용자 이름 가져오기
        const userName = localStorage.getItem('userName');
        
        if (userName) {
            // 사용자 이름을 첫 번째 랭킹 데이터에 적용
            const updatedRankings = rankings.map((rank, index) => {
                if (index === 0) {
                    return { ...rank, name: userName };
                }
                return rank;
            });
            setRankings(updatedRankings);
        }
    }, []);

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
                        {rankings.map((rank, index) => (
                            <tr key={index}>
                                <td>
                                    <div className={`${styles.rankNum} ${styles[`rankNum${index + 1}`]}`}>{index + 1}</div>
                                </td>
                                <td>{rank.name}</td>
                                <td>{rank.score}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
}

export default Ranking;
