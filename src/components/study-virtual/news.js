import React from 'react';

function News({ url, title, content }) {
    return (
        <div className='news'>
            <img src={url} title='news' alt='news'></img>
            <div className='text'>
                <h4>{title}</h4>
                <h6>2024.06.10</h6>
                <h5>{content}</h5>
            </div>
        </div>
    );
}

export default News;
