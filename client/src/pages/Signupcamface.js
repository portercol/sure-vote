// import Rreact, elements from React-Bootstrap, SignUp.css
import React, { useState, useRef } from 'react';
import { Button, ButtonGroup, Col, Container, Form, Jumbotron, Row } from "react-bootstrap";
import { submitToAgatha } from "../utils/submitApiImgP"
import ApiCalls from "../utils/ApiCalls";
// import GroupPersons from './faceapi/Groups';
// import Actions from './faceapi/Actions';
import { newUserApi } from '../utils/newUserfaceApi';


import "./Signupcamface.css";



// create functional component to hold sign up page data



const SignUp2 = () => {
    const [playing, setPlaying] = useState(false);

    const vest = useRef(null);
    const videoRef = useRef(null);



    const HEIGHT = 500;
    const WIDTH = 500;

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
        // const api = new ApiCalls();
        const data = canvas.toDataURL('image/png');
        // props needs the GID and the PID

        submitToAgatha(newUserApi, () => { console.log("aj") })
    }
    console.log('click')

    // create function for submit button 'onclick'
    const submitBtn = () => {
        console.log("submitted sign up form");
    }
    return (
        <>
            <Container id="main-container">
                <Jumbotron id="signup-jumbotron">
                    <h1 id="pi">Facial Information</h1>


                    <h1 id='name'>your name goes here</h1>
                    <Container>
                        <Row>
                            <Col>
                                <div className="app__container">

                                    <video ref={videoRef}
                                        height="500"
                                        width="500"
                                        muted
                                        autoPlay
                                        className="app__videoFeed"
                                    ></video>
                                </div>
                            </Col>
                            <Col>
                                <canvas ref={vest} id="canvas" width={WIDTH} height={HEIGHT}></canvas>
                            </Col>
                        </Row>
                    </Container>
                    <div className="app">
                        <div className="app__input">
                            {playing ? (
                                <button onClick={stopVideo}>Stop</button>
                            ) : (
                                    <button onClick={startVideo}>Start</button>
                                )}
                            <button className="btn btn-success" id="capture" onClick={snap}>CAPTURE</button>
                            <button className="btn btn-success" id="capture" onClick={() => {
                                newUserApi()
                                    .then(PIDR => {
                                        snap();
                                        submitToAgatha("5595", PIDR.personId,);

                                    })
                            }}>CAPTURE2</button>
                        </div>
                        <div className="app__input">
                            <button id="save" type="button">save</button>
                        </div>




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
