// import Rreact, elements from React-Bootstrap, SignUp.css
import React, { useState, useRef } from 'react';
import { Jumbotron, Form, Button, ButtonGroup, Row, Col, InputGroup, FormControl } from "react-bootstrap";
import "./SignUp.css";

// create functional component to hold sign up page data

const SignUp = () => {
  const [playing, setPlaying] = useState(false);

  const vest = useRef(null);
  const videoRef = useRef(null);



  const HEIGHT = 650;
  const WIDTH = 490;

  const startVideo = () => {
    setPlaying(true);
    navigator.getUserMedia(
      {
        video: true,
      },
      (stream) => {
        let video = document.getElementsByClassName('app__videoFeed')[0];
        if (video) {
          video.srcObject = stream;
        }
      },
      (err) => console.error(err)
    );
  };

  const stopVideo = () => {
    setPlaying(false);
    let video = document.getElementsByClassName('app__videoFeed')[0];
    video.srcObject.getTracks()[0].stop();
  };

  const snap = () => {
    if (playing === false) {
      console.log("no camera found")
    }
    else {
      console.log("camera found", vest)
      var context = vest.current.getContext('2d')
      context.drawImage(videoRef.current, 0, 0, HEIGHT, WIDTH);

    }
    console.log('snap')
  }

  window.onload = () => {
    const canvas = document.getElementById('canvas');

    const saveButton = document.getElementById('save');
    saveButton.addEventListener('click', () => save(canvas));
  };

  // save function
  function save(canvas) {
    const data = canvas.toDataURL('image/png');
    const anchor = document.createElement('a');
    anchor.href = data;
    anchor.download = 'image.png';
    anchor.click();
  }




  // create function for submit button 'onclick'
  const submitBtn = () => {
    console.log("submitted sign up form");
  }

  return (
    <>
      <Row>
        <Col xs lg={3}></Col>
        <Col xs lg={6}>
          <Jumbotron id="signup-jumbotron">
            <h1 id="pi">Personal Information</h1>
            <Form>
              <Form.Row>
                <Col>
                  <Form.Control placeholder="First name" />
                </Col>
                <Col>
                  <Form.Control placeholder="Last name" />
                </Col>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label></Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label></Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="formGridAddress1">
                <Form.Label id="address">Address</Form.Label>
                <Form.Control placeholder="Street Address" />
              </Form.Group>

              <Form.Group controlId="formGridAddress2">
                <Form.Label></Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" />
              </Form.Group>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label></Form.Label>
                  <Form.Control placeholder="City" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label></Form.Label>
                  <Form.Control as="select" defaultValue="State...">
                    <option>State</option>
                    <option id="AL">Alabama</option>
                    <option id="AK">Alaska</option>
                    <option id="AZ">Arizona</option>
                    <option id="AR">Arkansas</option>
                    <option id="CA">California</option>
                    <option id="CO">Colorado</option>
                    <option id="CT">Connecticut</option>
                    <option id="DE">Delaware</option>
                    <option id="DC">District of Columbia</option>
                    <option id="FL">Florida</option>
                    <option id="GA">Georgia</option>
                    <option id="HI">Hawaii</option>
                    <option id="ID">Idaho</option>
                    <option id="IL">Illinois</option>
                    <option id="IN">Indiana</option>
                    <option id="IA">Iowa</option>
                    <option id="KS">Kansas</option>
                    <option id="KY">Kentucky</option>
                    <option id="LA">Louisiana</option>
                    <option id="ME">Maine</option>
                    <option id="MD">Maryland</option>
                    <option id="MA">Massachusetts</option>
                    <option id="MI">Michigan</option>
                    <option id="MN">Minnesota</option>
                    <option id="MS">Mississippi</option>
                    <option id="MO">Missouri</option>
                    <option id="MT">Montana</option>
                    <option id="NE">Nebraska</option>
                    <option id="NV">Nevada</option>
                    <option id="NH">New Hampshire</option>
                    <option id="NJ">New Jersey</option>
                    <option id="NM">New Mexico</option>
                    <option id="NY">New York</option>
                    <option id="NC">North Carolina</option>
                    <option id="ND">North Dakota</option>
                    <option id="OH">Ohio</option>
                    <option id="OK">Oklahoma</option>
                    <option id="OR">Oregon</option>
                    <option id="PA">Pennsylvania</option>
                    <option id="RI">Rhode Island</option>
                    <option id="SC">South Carolina</option>
                    <option id="SD">South Dakota</option>
                    <option id="TN">Tennessee</option>
                    <option id="TX">Texas</option>
                    <option id="UT">Utah</option>
                    <option id="VT">Vermont</option>
                    <option id="VT">Virginia</option>
                    <option id="WA">Washington</option>
                    <option id="WV">West Virginia</option>
                    <option id="WI">Wisconsin</option>
                    <option id="WY">Wyoming</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label></Form.Label>
                  <Form.Control placeholder="Zip Code" />
                </Form.Group>
              </Form.Row>
            </Form>

            <div id="verification">
              <h3 id="verification-header">Voting Verification</h3>

              <Button variant="dark" size="lg" block>
                Generate Random Password
              </Button>

              <div id="random-password">
                <InputGroup className="mb-3">
                  <FormControl
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </div>
              <Button variant="dark" size="lg" block>
                Capture Image
              </Button>

              <br />
              <br />

              <ButtonGroup size="lg" className="mr-3">
                <Button href="/" onClick={submitBtn()} variant="dark"
                  type="submit" id='right-button'>Go Back</Button>
              </ButtonGroup>

              <ButtonGroup size="lg" className="mr-3">
                <Button href="/profile" onClick={submitBtn()} variant="dark"
                  type="submit" id='left-button'>Sign Up</Button>
              </ButtonGroup>


              <div id="capture-image">
                <div className="app__container">

                  <video ref={videoRef}
                    height={HEIGHT}
                    width={WIDTH}
                    muted
                    autoPlay
                    className="app__videoFeed"
                  ></video>
                </div>

                <canvas ref={vest} id="canvas" width={WIDTH} height={HEIGHT}></canvas>

                <div className="app__input">
                  {playing ? (
                    <button onClick={stopVideo}>Stop</button>
                  ) : (
                      <button onClick={startVideo}>Start</button>
                    )}
                  <button className="btn btn-success" id="capture" onClick={snap}>CAPTURE</button>

                </div>

                <button id="save" type="button">save</button>
              </div>
              {/* <InputGroup className="mb-3">
                  <FormControl
                    // placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup> */}
            </div>
          </Jumbotron>
        </Col>
        <Col xs lg={3}></Col>
      </Row>
    </>
  );
};

// export component from SignUp.jsx
export default SignUp;
