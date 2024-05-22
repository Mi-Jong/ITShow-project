import React from 'react';

function ListMoney(props) {
    return (
        <div className='grid'>
            <div className='name'>
                <p className='title'>{props.title}</p>
                <icon>d</icon>
            </div>
            <div className='money'>{props.money}</div>
        </div>
    );
}

export default ListMoney;
