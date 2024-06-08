import React from 'react';
import { IoIosHelpCircleOutline } from "react-icons/io";

function ListMoney(props) {
    return (
        <div className='grid'>
            <div className='name'>
                <p className='title'>{props.title}</p>
                <IoIosHelpCircleOutline />
            </div>
            <div className='money'>{props.money}</div>
        </div>
    );
}

export default ListMoney;
