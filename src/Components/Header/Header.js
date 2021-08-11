import React from 'react';
import {Card} from 'react-bootstrap';

const Header = () => {
    return (
      
        <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <h1>Breaking News</h1>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
        </Card>
    );
};      

export default Header;