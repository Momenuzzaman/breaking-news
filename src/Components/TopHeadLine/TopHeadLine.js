import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadLine = () => {
    const [articles, setArticales ] = useState([]);
    
    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=1e7b5a8d3ec84caf90324436f42ca660')
        .then(res => res.json())
        .then(data => setArticales(data.articles));
    },[]);
    return (
        <div>
            <h1>Top Headlines: {articles.length}</h1>
            {
                articles.map(article=><News key={article.publishedAt} article={article}></News>)
            }
        </div>
    );
};

export default TopHeadLine;