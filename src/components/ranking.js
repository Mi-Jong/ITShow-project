import '../css/style.css';
import Header from './header';
import Footer from './footer';
import styles from '../css/ranking.module.css';

function Ranking(props) {
    return (
        <section className={styles.ranking}>
            <table className={styles.rank}>
                <tr>
                    <th scope="col">순위</th>
                    <th scope="col">닉네임</th>
                    <th scope="col">점수</th>
                </tr>
                <tr>
                    <td><div className='rankNum rankNum1'>1</div></td>
                    <td>-10%</td>
                    <td>-10%</td>
                </tr>
                <tr>
                    <td><div className='rankNum rankNum2'>2</div></td>
                    <td>-10%</td>
                    <td>-10%</td>
                </tr>
                <tr>
                    <td><div className='rankNum rankNum3'>3</div></td>
                    <td>-10%</td>
                    <td>-10%</td>
                </tr>
                <tr>
                    <td><div className='rankNum'>4</div></td>
                    <td>-10%</td>
                    <td>-10%</td>
                </tr>

                {/* {rankings.map((rank, index) => (
                        <tr key={index}>
                            <td>
                                <div className={`${styles.rankNum} ${styles[`rankNum${index + 1}`]}`}>{index + 1}</div>
                            </td>
                            <td className={styles.rankName}>{rank.nickname}</td>
                            <td>{rank.score}</td>
                        </tr>
                ))} */}
            </table>
        </section>
    );
}


export default Ranking;