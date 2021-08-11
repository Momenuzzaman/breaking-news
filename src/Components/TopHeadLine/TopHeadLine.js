import React, { useEffect, useState } from 'react';

const TopHeadLine = () => {
    const [article, setArticales ] = useState([]);
    
    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=1e7b5a8d3ec84caf90324436f42ca660')
        .then(res => res.json())
        .then(data => setArticales(data.articles));
    },[]);
    return (
        <div>
            <h1>Top Headlines: {article.length}</h1>
        </div>
    );
};

export default TopHeadLine;