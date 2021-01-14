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
import { LoadingButton } from '../components/isloading'
import "./Signupcamface.css";
// import axios from 'axios';
import { useGlobalContextAuthUser } from '../utils/GlobalContextAuthUser';




// create functional component to hold sign up page data



const SignUp2 = () => {
    const [playing, setPlaying] = useState(false);
    const [userId] = useGlobalContextAuthUser();

    console.log("Cam2 user: ", userId);
    const [hide, show] = useState('')
    const vest = useRef(null);
    const videoRef = useRef(null);



    const HEIGHT = 500;
    const WIDTH = 500;


    const startVideo = () => {
        setPlaying(true);
        navigator.getUserMedia(
            {
                video: true, width: 1280, height: 720
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
        // if (Hidden === false)


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
                                <div className="app__container my-">

                                    <video ref={videoRef}
                                        height="400"
                                        width="400"
                                        // margins
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
                                            <button className="btn btn-success" onClick={stopVideo}>Stop</button>
                                        ) : (
                                                <button className="btn btn-success" onClick={startVideo}>Start</button>
                                            )}
                                    </ButtonGroup>
                                </Col>

                                <Col>
                                    <ButtonGroup size="lg" className="mr-3">
                                        <button id="capture " className="btn btn-success" onClick={() => {
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
                                                                        id: "5fff90e337455d54442f3d21",
                                                                        personId: currentPersonId
                                                                    })
                                                                .then(res => {
                                                                    console.log(res);
                                                                    console.log("Person id added to db");
                                                                    return true
                                                                })
                                                                .catch(err => {
                                                                    console.log(err);
                                                                })


                                                        })
                                                    stopVideo()
                                                });

                                        }}>use</button>
                                    </ButtonGroup>
                                </Col>
                            </Row>
                            <Col>
                                <canvas ref={vest} id="canvas" width={WIDTH} height={HEIGHT}></canvas>
                            </Col>
                        </div>





                    </div>




                    <br />
                    <br />


                    <ButtonGroup size="lg" className="mr-3">
                        <Button href="/profile" disabled={true || submitToAgatha.res === false} onClick={submitBtn()} variant="dark"
                            id='left-button'> Complete Sign Up</Button>
                    </ButtonGroup>




                </Jumbotron>
            </Container>
        </>
    );
};

// export component from SignUp.jsx
export default SignUp2;
