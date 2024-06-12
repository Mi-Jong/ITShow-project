import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { IoIosHelpCircleOutline } from "react-icons/io";
import Tooltip from '../../components/Tooltip';
import { GoX } from "react-icons/go";

function ListMoney(props) {
    const [showTooltip, setShowTooltip] = useState(false);
    const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
    const tooltipContainerRef = useRef(null);

    const handleIconClick = () => {
        setShowTooltip(!showTooltip);
    };

    useEffect(() => {
        if (showTooltip && tooltipContainerRef.current) {
            const tooltipContainerRect = tooltipContainerRef.current.getBoundingClientRect();
            const tooltipRect = document.querySelector('.tooltip').getBoundingClientRect();
            let top = tooltipContainerRect.top - tooltipRect.height;
            let left = tooltipContainerRect.left + (tooltipContainerRect.width - tooltipRect.width) / 2;

            // Check if tooltip is out of bounds
            const bodyRect = document.body.getBoundingClientRect();
            if (top < bodyRect.top) {
                top = bodyRect.top;
            }
            if (left < bodyRect.left) {
                left = bodyRect.left;
            }
            if (top + tooltipRect.height > bodyRect.bottom) {
                top = bodyRect.bottom - tooltipRect.height;
            }
            if (left + tooltipRect.width > bodyRect.right) {
                left = bodyRect.right - (tooltipRect.width + 15);
            }

            setTooltipPosition({ top, left });
        }
    }, [showTooltip]);

    return (
        <div className='grid'>
            <div className='name'>
                <p className='title'>{props.title}</p>
                <div className='tooltip-container' style={{ position: 'relative' }} ref={tooltipContainerRef}>
                    <IoIosHelpCircleOutline onClick={handleIconClick} />
                    {showTooltip && createPortal(
                        <div className="tooltip" style={{ position: 'fixed', top: tooltipPosition.top, left: tooltipPosition.left }}>
                            <div className='tooltipX'> <GoX size="25" onClick={handleIconClick}/></div>
                            <div className='tooltip-exp'>
                                {props.desc}
                            </div>
                        </div>,
                        document.body
                    )}
                </div>
            </div>
            <div className='money'>{props.money}</div>
        </div>
    );
}

export default ListMoney;
