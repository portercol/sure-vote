// for this page we need to do several things
// create a hot route to page to work on it
// ????? how will varify work with the camera ????????
// 1. draw out the site page
// 2. cut down the varification function so that it can render on this page
// 3. pull data to run it agensts(hard code to start)
// 4. pull the confidence rating (run some tests on the confidence witht the new system)
// 5. use the confidence rating to varify user and give access to voting page
// import Rreact, elements from React-Bootstrap, SignUp.css
import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react';
import { Button, ButtonGroup, Col, Container, Form, Jumbotron, Row } from "react-bootstrap";
import { useGlobalContextAuthUser } from '../utils/GlobalContextAuthUser';
// import { submitToAgatha } from "../utils/submitApiImgP"
// import { newUserApi } from '../utils/newUserfaceApi';
// import { trainingStart } from '../utils/Training'
import { letsSeeYourFace } from '../utils/Identify';
// import ApiCalls from "../utils/ApiCalls";
import "./Signupcamface.css";
// create functional component to hold sign up page data
const SignIn2 = () => {
    const [playing, setPlaying] = useState(false);
    const [userId] = useGlobalContextAuthUser();
    console.log("Cam3 user: ", userId);
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
        console.log(context, 'snap')
        return context
    }
    window.onload = () => {
        const canvas = document.getElementById('canvas');
        const saveButton = document.getElementById('save');
        saveButton.addEventListener('click', () => save(canvas));
    };
    // save function 
    function save(vest) {
        // const api = new ApiCalls();
        // props needs the GID and the PID
        const data = vest.toDataURL('image/png');
        console.log(data, 'click')
        return data
        // submitToAgatha(newUserApi, () => { console.log("aj") })
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
                                if (playing === true)
                                    console.log(snap(), "RENDER SNAP")
                                snap().canvas.toBlob(data => {
                                    console.log("hit snap personId: ", userId.personId);
                                    // this is considered asyc / and looks like this as an array letsSeeYourFace('5595':GID, DATA: Photo from snap, Person ID:"3300f642-91db-4165-b27d-270559430b26", and this is the confidence being found in canidate:letsSeeYourFace.confidence,)
                                    letsSeeYourFace('5595', data, userId.personId, letsSeeYourFace.confidence,)
                                    // this is logging the propmise but is never fafilled 
                                }
                                    // remember at this time the code is hard coded
                                    // submitToAgatha("5595", "fa704750-0b81-43d0-a3a4-3e025f3eb2ba", data, async (STA) => {
                                    //     var data = await STA.json()
                                    //     console.log(data, "AJCLEMENS")
                                    // })
                                )
                            }}>use</button>
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
export default SignIn2;