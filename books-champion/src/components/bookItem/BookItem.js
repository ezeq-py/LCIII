import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import DateRead from '../dateRead/DateRead';

const BookItem = ({author, title, dateRead, pageCount}) => {


    return (
        <Card style={{ width: '18rem' }} className='mx-5 my-3'>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{author}</Card.Subtitle>
                <Card.Text>
                    Some quick example text to build on the card title and 
                    make up the
                    bulk of the card's content.
                </Card.Text>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <DateRead date={dateRead}/>
                    </ListGroup.Item>
                    <ListGroup.Item>{pageCount} páginas</ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    );
}

export default BookItem