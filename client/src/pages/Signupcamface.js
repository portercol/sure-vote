// import Rreact, elements from React-Bootstrap, SignUp.css
import React, { useState, useRef } from 'react';
import { Button, ButtonGroup, Col, Container, Form, Jumbotron, Row } from "react-bootstrap";
import { submitToAgatha } from "../utils/submitApiImgP"
import { newUserApi } from '../utils/newUserfaceApi';
import { trainingStart } from '../utils/Training'
// import ApiCalls from "../utils/ApiCalls";
// import GroupPersons from './faceapi/Groups';
// import Actions from './faceapi/Actions';
import axios from "axios";

import "./Signupcamface.css";
// import axios from 'axios';
import { useGlobalContextAuthUser } from '../utils/GlobalContextAuthUser';




// create functional component to hold sign up page data



const SignUp2 = () => {
    const [playing, setPlaying] = useState(false);
    const [userId] = useGlobalContextAuthUser();
    console.log("Cam2 user: ", userId);

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
        setPlaying(true);
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
                    <h2 id='name'>your name goes here</h2>
                    <h4>Please remove hats and glasses and look directly at the camera.</h4>
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
                                <button className="btn btn-success" onClick={stopVideo}>Stop</button>
                            ) : (
                                    <button className="btn btn-success" onClick={startVideo}>Start</button>
                                )}
                            <button className="btn btn-success" id="capture" onClick={snap}>CAPTURE</button>
                            <button className="btn btn-success" id="capture" onClick={() => {
                                console.log(snap(), "RENDER SNAP")
                                if (playing === true)

                                    snap().canvas.toBlob(data => {
                                        // need to find away to get new user to wait on the FID befor subing a new user.
                                        // if anything let look inside of STA
                                        newUserApi()
                                            .then(PIDR => {

                                                submitToAgatha("5595", PIDR.personId, data)
                                                if (submitToAgatha === {}) {
                                                    console.error('no picture taken')
                                                }
                                                const currentPersonId = PIDR.personId;
                                                const currentUserId = userId.id;
                                                console.log("SubmitToAgatha UserId: ", currentUserId, "PersonId: ", currentPersonId);
                                                // console.log("PersonId: ", currentPersonId.length, "this gives the length of the string [36] sooo that can be used ");

                                                axios
                                                    .post("/api/storePersonId",
                                                        {
                                                            id: currentUserId,
                                                            personId: currentPersonId
                                                        })
                                                    .then(res => {
                                                        console.log(res);
                                                        console.log("Person id added to db");
                                                    })
                                                    .catch(err => {
                                                        console.log(err);
                                                    })


                                            })
                                    });

                            }}>use</button>
                        </div>
                        <div className="app__input">
                            <button id="save" type="button">save</button>
                        </div>




                    </div>




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
