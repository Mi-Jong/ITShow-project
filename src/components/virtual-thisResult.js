import React, { useState } from 'react';
import '../css/virtual-thisResult.css';
import { GoX } from "react-icons/go";

function VirtualThisResult(props) {
    return (
        <div id='result'>
            <div class='result-inner'>
                <div className='inner-header'>
                    <p>결과</p>
                    <GoX style={{paddingRight:"20px"}}/>
                </div>
                <div className='inner-cont'>
                    <div className='cont'>
                        <div className='sub'>
                            <div className='sub-title'>
                                이번 분기 내용
                            </div>
                            <div className='sub-cont'>
                                <ul>
                                    <li>수익 : <span className='profit'>dd</span></li>
                                    <li>잔고 : <span className='balance'>dd</span></li>
                                </ul>
                            </div>
                            
                        </div>
                        <div className='assess'>
                            <div className='assess-title'>
                                이번 분기 한줄평
                            </div>
                            <div className='assess-cont'>
                                정말 아쉬워요 다음번 뉴스를 잘 확인합시다
                            </div>
                        </div>
                    </div>
                    <button className='nextButton'>
                        다음으로
                    </button>
                </div>
            </div>
        </div>
    );
}

export default VirtualThisResult;
