import React, { useState } from 'react';
import '../css/style.css';
import '../css/virtual-overallResult.css';
import { GoX } from "react-icons/go";

function VirtualOverallResult(props) {
    return (
        <div id='result'>
            <div class='result-inner'>
                <div className='inner-header'>
                    <p>전체 결과</p>
                    <GoX style={{paddingRight:"20px"}}/>
                </div>
                <div className='inner-cont'>
                    <table className='day-table'>
                        <tr>
                            <th scope="col">1일차 내용</th>
                            <th scope="col">2일차 내용</th>
                            <th scope="col">3일차 내용</th>
                            <th scope="col">4일차 내용</th>
                        </tr>
                        <tr>
                            <td>-10%</td>
                            <td>-10%</td>
                            <td>-10%</td>
                            <td>-10%</td>
                        </tr>
                    </table>

                    <table className='result-table'>
                        <tr>
                            <th scope="col">총 수익</th>
                            <th scope="col">총평</th>
                        </tr>
                        <tr>
                            <td>20%</td>
                            <td>오 주식 좀 하시는데요?</td>
                        </tr>
                    </table>
                   
                    <button className='nextButton'>
                        다음으로
                    </button>
                </div>
            </div>
        </div>
    );
}

export default VirtualOverallResult;
