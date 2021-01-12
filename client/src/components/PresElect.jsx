import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  Card,
  Row,
  Col
} from "react-bootstrap";
import PresElectData from '../seedData/presSeed';
import axios from 'axios';
import { useGlobalContextAuthUser } from "../utils/GlobalContextAuthUser.js";


const PresElect = (props) => {

  const [candidateList, setCandidateList] = useState([]);
  const [electionList, setElectionList] = useState([]);
  const [candidate, setCandidate] = useState("");
  const [voted, setVoted] = useState(false);
  const [userId] = useGlobalContextAuthUser();

  // const [dataReceived, setDataReceived] = useState(false);
  // get data back, set to true
  // if they've already voted they're not allowed to vote in this election


  // pulling data from back end to page
  useEffect(() => {
    axios
      .get('/api/candidate')
      .then((res) => {
        const candidateData = res.data.getCandidate;
        setCandidateList(candidateData);
        // console.log(candidateData)
      })
    axios
      .get('/api/election')
      .then((res) => {
        const electionData = res.data.getElection;
        setElectionList(electionData);
        // console.log(electionData)
      })
    axios
      .post('/api/vote')
      .then((res) => {
        const electionData = res.data.getElection;
        setElectionList(electionData);
        // console.log(electionData)
      })
  }, []);


  const submitVote = (event) => {
    event.preventDefault();
    const selectedCandidate = candidateList.find(currentCandidate => currentCandidate.name === candidate)
    const selectedElection = electionList.find(currentElection => currentElection.office === "President of the United States")
    //const userVoting = userId
    alert("You voted for " + candidate + ".");
    axios.post('/api/vote', { candidate: selectedCandidate._id, election: selectedElection._id })
      .then((res) => {
        // console.log(res.data)
        setVoted(true)
        setCandidate()
      })
      .catch(err => console.log(err));
  };

  // useEffect(() => {
  //   axios.get('/api/vote', )
  // }, []); 

  // if (!dataReceived) {
  //   return (
  //     <>
  //   <Container id="pres-elect-card">
  //   <Card bg="light">
  //     <Card.Body>
  //       <h3>{PresElectData[0].office}</h3> 
  //       <h5>Data not available for the following possible reasons:</h5>
  //       <ul>
  //         <li>

  //         </li>
  //         <li>

  //         </li>
  //       </ul>        
  //     </Card.Body>
  //   </Card>
  // </Container>
  //     </>
  //   )
  // }

  return (
    <Container id="pres-elect-card">
      <Card bg="light">
        <Card.Body>
          <h3>
            President of the United States
          </h3>
          <hr />
          <Row>
            <Col xs lg={3}></Col>
            <Col xs lg={1}>
              <input
                type="radio"
                checked={candidate === "Donald J. Trump"}
                value="Donald J. Trump"
                id="candidate1"
                disabled={voted}
                onChange={(e) => {
                  setCandidate(e.target.value);
                  // console.log(e.target.value)
                }}
              />
            </Col>
            <Col xs lg={4}>
              <form>
                <div className="candidate-select">
                  <div className="candidate-radio">
                    <label>
                      {PresElectData[0].president[0].party}<br />
                      {PresElectData[0].president[0].candidate}
                      {PresElectData[0].president[0].candidateState}<br />
                      {PresElectData[0].president[0].runningMate}
                      {PresElectData[0].president[0].runningMateState}
                    </label>
                    <br />
                  </div>
                </div>
              </form>
            </Col>
            <Col xs lg={4}></Col>
          </Row>

          <Row>
            <Col xs lg={3}></Col>
            <Col xs lg={1}>
              <input
                type="radio"
                checked={candidate === "Joseph R. Biden"}
                value="Joseph R. Biden"
                id="candidate2"
                disabled={voted}
                onChange={(e) => {
                  setCandidate(e.target.value);
                  // console.log(e.target.value)
                }}
              />
            </Col>
            <Col xs lg={4}>
              <label>
                {PresElectData[0].president[1].party}<br />
                {PresElectData[0].president[1].candidate}
                {PresElectData[0].president[1].candidateState}<br />
                {PresElectData[0].president[1].runningMate}
                {PresElectData[0].president[1].runningMateState}
              </label>
            </Col>
            <Col xs lg={4}></Col>
          </Row>
          <Button
            variant="dark"
            type="submit"
            size="lg"
            block
            disabled={!candidate || voted}
            onClick={submitVote}
          >
            Submit
              </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PresElect;
