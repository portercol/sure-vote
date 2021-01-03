// import Rreact, elements from React-Bootstrap, SignUp.css
import React, { useState, useRef, Component, Fragment } from 'react';
import { Button, ButtonGroup, Col, Container, Form, Jumbotron } from "react-bootstrap";
import { submitToAgatha } from "../utils/submitApiImgP"
import ApiCalls from "../utils/ApiCalls";

import "./SignUp.css";
import Row from 'react-bootstrap/Row'
import GroupPersons from './faceapi/Groups';
// import Persons from './faceapi/Persons';
// import Actions from './faceapi/Actions';
// create functional component to hold sign up page data
class GroupPersonsItems extends Component {
    onSelect = (e, personGroupId) => {
        this.props.onSelect(personGroupId);
    }

    onChanged = () => {
        // Item has been deleted, tell the parent to refresh
        this.props.onChanged();
    }

    render() {
        const groups = this.props.groups
        return (
            groups.map((group) =>
                <Container key={group.personGroupId} className="group-list">
                    <Row>
                        <Col sm={10} onClick={(e) => this.onSelect(e, group.personGroupId)}>

                            <h5>{group.name}</h5>
                        </Col>
                        <Col sm={2} className="group-actions-button">


                        </Col>
                    </Row>
                </Container>
            )
        )
    }
}



// class GroupPersons extends Component {
// constructor(props) {
//     super(props)
//     this.state = {}
// }

// handleSelection = (personGroupId) => {
//     this.props.onSelect(personGroupId);
// }

// onChanged = () => {
//     // Item has been added/removed/updated, relead the component
//     this.forceUpdate(() => { });
// }

// render() {
//     var api = new ApiCalls();
//     const url = api.personGroupsEndPoint();
//     const headers = api.getCommonHeaders();
//     const options = {
//         headers
//     };

//     return (
//         <Fragment>
//             <fieldset className="col-header">
//                 {/* this is the add groups btn */}
//                 <legend><AddGRoupPerson onChanged={this.onChanged} /> Groups</legend>
//                 <Fragment>
//                     <Fetchino
//                         url={url}
//                         options={options}
//                         render={({ loading, error, data }) => (
//                             <Fragment>
//                                 {loading && <Loader loading containerStyle={{ background: "rgba(255, 255, 255, 0.9)" }} />}
//                                 {error && <div>{error}</div>}
//                                 {data && <GroupPersonsItems groups={data}
//                                     onSelect={this.handleSelection}
//                                     onChanged={this.onChanged} />
//                                 }
//                             </Fragment>
//                         )}
//                     />
//                 </Fragment>
//             </fieldset>
//         </Fragment>
//     );
// }
// }



class AddGRoupPerson extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modalOpen: false,
            newGroupName: "class demo",
            newGroupID: "5595",
            showLoadingOverlay: false
        }
        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
    }

    openModal() {
        this.setState({ modalOpen: true })
    }

    closeModal() {
        this.setState({ modalOpen: false })
    }

    setNewGroupName = e => {
        this.setState({ newGroupName: e.target.value })
    }

    setNewGroupID = e => {
        this.setState({ newGroupID: e.target.value })
    }

    submit = e => {
        this.setState({ modalOpen: false, showLoadingOverlay: true }, () => {
            let body = {
                name: "class demo",
                userData: "1234",
                recognitionModel: ""
            };

            var api = new ApiCalls();
            api.Put(api.personGroupsEndPoint(this.state.newGroupID), body)
                .then(rest => {
                    // Tell the parent we've added a new item
                    this.setState({ showLoadingOverlay: false }, () => {
                        this.closeModal();
                        this.props.onChanged();
                    });
                });
        });
    }
    render() {
        return (
            <Fragment>

                <Button className="add-button" variant="primary" onClick={this.submit}>
                    Push me
                </Button>


            </Fragment>
        );
    }
}





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

    // window.onload = () => {
    //     const canvas = document.getElementById('canvas');

    //     const saveButton = document.getElementById('save');
    //     saveButton.addEventListener('click', () => save(canvas));
    // };

    // // save function 
    // function save(canvas) {
    //     // const api = new ApiCalls();
    //     const data = canvas.toDataURL('image/png');
    //     // props needs the GID and the PID
    //     const props = {}
    //     submitToAgatha(props, data, () => { console.log("aj") })
    // }
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
