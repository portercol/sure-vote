
// 5. use the confidence rating to varify user and give access to voting page
import axios from 'axios';
import React, { useState, useRef } from 'react';
import { Button, ButtonGroup, Col, Container, Form, Jumbotron, Row } from "react-bootstrap";
import { useGlobalContextAuthUser } from '../utils/GlobalContextAuthUser';
import { letsSeeYourFace } from '../utils/Identify';
import "./Signupcamface.css";
import { Redirect } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";

// create functional component to hold sign up page data
const SignIn2 = () => {
    const [playing, setPlaying] = useState(false);
    const [userId] = useGlobalContextAuthUser();
    console.log("Cam3 user: ", userId);
    const vest = useRef(null);
    const videoRef = useRef(null);
    const HEIGHT = 450;
    const WIDTH = 390;
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
        // console.log(data, 'click')
        return data
        // submitToAgatha(newUserApi, () => { console.log("aj") })
    }
    // create function for submit button 'onclick'

    const submitBtn = () => {



        console.log("submitted sign up form");
    }

    //reroute to signin if not authenticated
    if (!userId.id) {
        return (<Redirect to="/signin" />);
    }

    return (
        <>
            <Navbar />
            <Container id="main-container">
                <Jumbotron id="signup-jumbotron">
                    <h1 id="pi">Facial Detection</h1>
                    <hr />
                    <p id='name'>This is the final step to Voting, please take of any hats and look directly into the camera, if you see that your glasses are showing any glair plaese remove them, thank you.</p>
                    <Container>
                        <Row>
                            <Col>
                                <div className="app__container">
                                    <video ref={videoRef}
                                        height="400"
                                        width="400"
                                        muted
                                        autoPlay
                                        className="app__videoFeed"
                                    ></video>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <div className="app">
                        <div className="app__input">
                            <Row>
                                <Col>
                                    <ButtonGroup size="lg" className="mr-3">

                                        {playing ? (
                                            <button className="btn btn-success" onClick={stopVideo}>Stop Camera</button>
                                        ) : (
                                                <button className="btn btn-success" onClick={startVideo}>Start Camera</button>
                                            )}
                                    </ButtonGroup>
                                </Col>
                                <Col>

                                    <ButtonGroup size="lg" className="mr-3">
                                        <button id="save" className="btn btn-success" onClick={() => {
                                            console.log(snap(), "RENDER SNAP")
                                            if (playing === true)
                                                snap().canvas.toBlob(async data => {
                                                    console.log("hit snap personId: ", userId.personId);
                                                    try {

                                                        let ID = await letsSeeYourFace('5595', data, userId.personId, letsSeeYourFace.confidence,)
                                                        console.log(ID, "this is the id stuff")



                                                    } catch (err) {
                                                        console.error("this is an error", err)
                                                    }
                                                }
                                                )
                                            stopVideo()
                                        }}>Take Picture</button>
                                    </ButtonGroup>
                                </Col>
                            </Row>
                        </div>
                        <div className="app__input">
                        </div>
                    </div>

                    <br />
                    <br />
                    <h1>Used Photo</h1>
                    <br />
                    <br />
                    <Col>
                        <canvas ref={vest} id="canvas" width={WIDTH} height={HEIGHT}></canvas>
                    </Col>





                    <Button variant="primary" size="lg" block href="/profile" disabled={true} onClick={submitBtn()}
                        type="submit" id='left-button'>VOTE!</Button>


                </Jumbotron>
            </Container>
        </>
    );
};
// export component from SignUp.jsx
export default SignIn2;