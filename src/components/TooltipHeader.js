import React from 'react'
import styles from '../css/TooltipHeader.module.css';
import { GoX } from "react-icons/go";

const TooltipHeader = ({ onClose }) => {
  return (
    <div className={styles.TooltipHeader}> 
      <div className={styles['tooltip__inner']}> 
        <p className={styles.tooltiptext}> 
          <div className={styles.x}> 
            <GoX onClick={onClose} />
          </div>
          <p>설명에 맞는 답을 선택하여 높은 점수를 획득하세요.</p>
          <p>각 선택지당 10점입니다.</p>
        </p>
      </div>
    </div>
  )
}

export default TooltipHeader