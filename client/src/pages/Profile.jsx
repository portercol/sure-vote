import React from 'react';
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap'

const Profile = () => {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Joe Shmoe</ListGroupItem>
                    <ListGroupItem>DOB: 06/06/1966</ListGroupItem>
                    <ListGroupItem>123 Windsor Ln The Moon, Earth</ListGroupItem>
                </ListGroup>
                <Card.Body>
                <Button variant="primary" type="submit">Update Profile</Button>
                    
                </Card.Body>
            </Card>
        </>
    )
};

export default Profile;