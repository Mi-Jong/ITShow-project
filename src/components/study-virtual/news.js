import React from 'react';

function News(props) {
    return (
        <div className='news'>
            <img src={props.img} title='ee' alt='news'></img>
            <div className='text'>
                <h4>{props.title}</h4>
                <h6>2024.06.10</h6>
                <h5>{props.content}</h5>
            </div>
        </div>
    );
}

export default News;
