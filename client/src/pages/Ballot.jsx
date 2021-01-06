<<<<<<< HEAD
// import React, { useEffect, useState, Component, submitBtn } from "react";
// import {
//   Button,
//   Jumbotron,
//   Container,
//   Card
// } from "react-bootstrap";
// import Navbar from "../components/Navbar.jsx";
// import PresElect from "../components/PresElect";
// import HouseElect from "../components/HouseElect";
// import GovElect from "../components/GovElect";
// import StSenElect from "../components/StSenElect";
// import StHouseElect from "../components/StHouseElect";
// import ScRetain from "../components/ScRetain";
// import ConstAmend1 from "../components/ConstAmend1";
// import ConstAmend2 from "../components/ConstAmend2";
// // import "../scripts/seed";
// import "./Ballot.css";
=======
import React, { useEffect, useState } from "react";
import {
  Button,
  Jumbotron,
  Container,
  Card
} from "react-bootstrap";
import Navbar from "../components/Navbar.jsx";
import PresElect from "../components/PresElect";
import HouseElect from "../components/HouseElect";
import GovElect from "../components/GovElect";
import StSenElect from "../components/StSenElect";
import StHouseElect from "../components/StHouseElect";
import ScRetain from "../components/ScRetain";
import ConstAmend1 from "../components/ConstAmend1";
import ConstAmend2 from "../components/ConstAmend2";
// import "../scripts/seed";
import "./Ballot.css";
import axios from 'axios';
>>>>>>> 29f6d116964d9d664283d8c342f62fd6dc6fbdb1

// const Ballot = () => {
//   const [radio, setRadio] = useState([]);

<<<<<<< HEAD
//   const radios = [
//     { name: "Option 1", value: "option1" },
//     { name: "Option 2", value: "option2" },
//   ];

//   const submitVote = (event) => {
//     event.preventDefault();
//     console.log("hitting the button");
//   };

//   const votes = {};

//   return (
//     <>
//       <Navbar />
//       <Container id="main-container">
//         <Jumbotron id="main-jumbotron">
//           <h1>Ballot</h1>
//           <hr />
//           <h6>
//             Click the radio button for the corresponding option to vote.
//             When you are done, click submit.
//               </h6>
//           <h6>
//             Ensure your selections are correct. If you encounter any
//             problems, please click the 'Contact' button above.
//               </h6>
//           <PresElect />
//           <HouseElect />
//           <GovElect />
//           <StSenElect />
//           <ScRetain />
//           <ConstAmend1 />
//           <ConstAmend2 />


//           <PresElect />
//           <HouseElect />
//           <GovElect />
//           <StSenElect />
//           <StHouseElect />
//           <ScRetain />
//           <ConstAmend1 />
//           <ConstAmend2 />

//           <Container id="submit-card">
//             <Card bg="light">
//               <Card.Body>
//                 <h5>Please verify answers and click submit.</h5>
//                 <br />
//                 <Button
//                   variant="secondary"
//                   type="submit"
//                   size="lg"
//                   block
//                   onClick={submitVote}
//                 >
//                   Submit
//                 </Button>
//               </Card.Body>
//             </Card>

//             <Card bg="light">
//               <Card.Body>
//                 <h5>Please verify answers and click submit.</h5>
//                 <br />
//                 <Button
//                   variant="dark"
//                   type="submit"
//                   size="lg"
//                   block
//                   onClick={submitVote}
//                 >
//                   Submit
//                   </Button>
//               </Card.Body>
//             </Card>
//           </Container>
//         </Jumbotron>
//       </Container>
=======
  // useEffect(() => {
  //   sendVote()
  // }, [])

  // const sendVote = () => {
  //   axios.post('/api/vote' + radio)
  //     .then((res) => setRadio([...radio, res.data]))
  //     .catch(err => console.log (err));
  //     console.log(radio);
  // }

  
  // const submitVote = (event) => {
    //   // event.preventDefault();
    //   console.log(radio);
    //   axios.post('/api/vote', { key: radio })
    //     .then(() => console.log("Success"))
    //     .catch(err => console.log(err));
    // };
    
  const submitButton = () => {}
  
  return (
    <>
      <Navbar />
      <Container id="main-container">
        <Jumbotron id="main-jumbotron">
          <h1>Ballot</h1>
          <hr />
          <h6>
            Click the radio button for the corresponding option to vote.
            When you are done, click submit.
          </h6>
          <h6>
            Ensure your selections are correct. If you encounter any
            problems, please click the 'Contact' button above.
          </h6>
          <PresElect />
          <HouseElect />
          <GovElect />
          <StSenElect />
          <StHouseElect />
          <ScRetain />
          <ConstAmend1 />
          <ConstAmend2 />

          <Container id="submit-card">
            <Card bg="light">
              <Card.Body>
                <h5>When you are done voting, click submit</h5>
                <h5>WARNING: You will not be able to return to this ballot.</h5>
                <br />
                <Button
                  href="/profile"
                  variant="dark"
                  type="submit"
                  size="lg"
                  block
                  onClick={() => {submitButton()
                  // sendVote(radio);
                  }}
                >
                  Submit
                  </Button>
              </Card.Body>
            </Card>
          </Container>
        </Jumbotron>
      </Container>
>>>>>>> 29f6d116964d9d664283d8c342f62fd6dc6fbdb1

//     </>
//   );
// };

// export default Ballot;
