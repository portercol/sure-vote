// import Rreact, elements from React-Bootstrap, SignUp.css
import React, { useState, useRef } from 'react';
import { Button, ButtonGroup, Col, Container, Form, Jumbotron } from "react-bootstrap";
import "./SignUp.css";
// import GroupPersons from './faceapi/Groups';
// import Persons from './faceapi/Persons';
// import Actions from './faceapi/Actions';
// create functional component to hold sign up page data
const SignUp2 = () => {
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
            <Container id="main-container">
                <Jumbotron id="signup-jumbotron">
                    <h1 id="pi">Facial Information</h1>
                    <div className="app">
                        <div className="app__container">

                            <video ref={videoRef}
                                height="500"
                                width="500"
                                muted
                                autoPlay
                                className="app__videoFeed"
                            ></video>
                        </div>
                        <div className="app__input">
                            {playing ? (
                                <button onClick={stopVideo}>Stop</button>
                            ) : (
                                    <button onClick={startVideo}>Start</button>
                                )}
                            <button className="btn btn-success" id="capture" onClick={snap}>CAPTURE</button>

                        </div>
                        <div className="app__input">
                            <button id="save" type="button">save</button>
                        </div>

                        <canvas ref={vest} id="canvas" width={WIDTH} height={HEIGHT}></canvas>


                    </div>

                    <Form>
                        <Form.Row>
                            <Col>
                                <Form.Control placeholder="First name" />
                            </Col>
                            <Col>
                                <Form.Control placeholder="Last name" />
                            </Col>
                        </Form.Row>
                    </Form>


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




                </Jumbotron>
            </Container>
        </>
    );
};

// export component from SignUp.jsx
export default SignUp2;