import '../css/style.css';
import Header from './header';
import Footer from './footer';
import '../css/ranking.css';

function Ranking(props) {
    return (
        <>
            <table className='rank'>
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
            </table>
        </>
    );
}


export default Ranking;