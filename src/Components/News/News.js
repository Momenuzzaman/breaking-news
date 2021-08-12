import React from 'react';
import {Button,Card} from 'react-bootstrap';

const News = ({article}) => {
   console.log(article);
        
    return (
        <Card>
        <Card.Header>{article?.author}</Card.Header>
        <Card.Body>
          <Card.Title>{article?.title}</Card.Title>
          <img width="100px" height="100px" src= {article?.urlToImage}></img>
          <Button variant="primary">
            <a href = {article?.url} >Go somewhere</a>
          </Button>
        </Card.Body>
      </Card> 
    );
};

export default News;