// import necessary modules/packages, stylesheets and components
import React, { useState, useEffect } from "react";
import { Button, Card, Modal, ListGroup, ListGroupItem } from 'react-bootstrap';
import "./VoteHistory.css";
import axios from 'axios';
import { useGlobalContextAuthUser } from "../utils/GlobalContextAuthUser.js";

// create functional component to hold data
const VoteHistory = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [data, setData] = useState();
  const [userId] = useGlobalContextAuthUser();

// pulling data from back end to page
  useEffect(() => {
      voteData()
      console.log(userId.id, "Vote History")
    }, []);
    
    const voteData = () => {
        axios
        .get('/api/vote/' + userId.id)
        .then((res) => {
            const getVote = res.params;
            // setCandidateList(candidateData);
            console.log(res.params)
            console.log(getVote)
        })
        .catch((err) => console.log(err))
    }

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        Vote History
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title id="title">Vote History</Modal.Title>
        </Modal.Header>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>2020</Card.Title>
                <Card.Text>
                </Card.Text>
            </Card.Body>
            <ListGroup variant="flush">
                <ListGroup.Item><span className="span">President of the United States: </span>Cras justo odio</ListGroup.Item>
                <ListGroupItem><span className="span">US House, 2nd Congressional District: </span>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem><span className="span">Governor of Utah: </span>Vestibulum at eros</ListGroupItem>
                <ListGroupItem><span className="span">Utah State Senator, 19th Senate District: </span>Cras justo odio</ListGroupItem>
                <ListGroupItem><span className="span">Utah State House, 7th Congressional District: </span>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem><span className="span">Supreme Court Retention: </span>Vestibulum at eros</ListGroupItem>
                <ListGroupItem><span className="span">Constitutional Amendment 1: </span>Cras justo odio</ListGroupItem>
                <ListGroupItem><span className="span">Constitutional Amendment 2: </span>Dapibus ac facilisis in</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Link href="#">Previous Year</Card.Link>
                <Card.Link href="#">Next Year</Card.Link>
            </Card.Body>
        </Card> 
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="dark" onClick={handleClose}>
            Save
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

// export VoteHistory out of VoteHistory.jsx
export default VoteHistory;