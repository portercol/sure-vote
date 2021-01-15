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
import { Redirect } from "react-router-dom";




// create functional component to hold sign up page data



const SignUp2 = () => {
    const [playing, setPlaying] = useState(false);
    const [userId] = useGlobalContextAuthUser();

    console.log("Cam2 user: ", userId);
    const [hide, show] = useState('')
    const vest = useRef(null);
    const videoRef = useRef(null);




    const HEIGHT = 450;
    const WIDTH = 390;


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
                    <h1 id="pi">Facial Detection</h1>
                    <hr />
                    <p id='name'>This is the final step in creating a profile, please take of any hats and look directly into the camera, if you see that your glasses are showing any glair plaese remove them, thank you.</p>
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
                                            <button className="btn btn-success" onClick={stopVideo}>Stop Camera</button>

                                        ) : (
                                                <button className="btn btn-success" onClick={startVideo}>Start Camera</button>
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
                                                            if (userId.personId === null) {
                                                                console.error('no picture taken')

                                                                alert(
                                                                    "Your face was not detected, please turn the camera back on and try again."
                                                                )
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
                                                                    return true
                                                                })
                                                                .catch(err => {
                                                                    console.log(err, "err")

                                                                    // console.log(err);
                                                                })
                                                            if (currentPersonId.length < 0) {
                                                                alert("Your face has been mapped, you may complete your sign up now.")

                                                            }

                                                        })
                                                    stopVideo()
                                                });

                                        }}>Take Picture</button>
                                    </ButtonGroup>
                                </Col>
                            </Row>

                            <div className="app__input">
                            </div>


                            <br />
                            <br />
                            <h1>Used Photo</h1>
                            <br />
                            <br />
                            <Col>
                                <canvas ref={vest} id="canvas" width={WIDTH} height={HEIGHT}></canvas>
                            </Col>
                        </div>
                        <div className="app__input">

                        </div>




                    </div>




                    <br />
                    <br />


                    <Button variant="primary" size="lg" block href="/profile" disabled={true || submitToAgatha.res === false} onClick={submitBtn()}
                        id="save"> Complete Sign Up</Button>




                </Jumbotron>
            </Container>
        </>
    );
};

// export component from SignUp.jsx
export default SignUp2;
