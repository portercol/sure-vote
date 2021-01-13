// import Rreact, elements from React-Bootstrap, SignUp.css
import React, { useState } from "react";
import { Button, ButtonGroup, Container, Form, Jumbotron } from "react-bootstrap";
import './SignIn.css'
import axios from "axios";
import { useGlobalContextAuthUser } from "../utils/GlobalContextAuthUser";
import { Link, Redirect } from "react-router-dom";


// create functional component to hold sign up page data
const SignIn = () => {

    const [usernameLogin, setUsernameLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');
    const [userId, dispatch] = useGlobalContextAuthUser();
    const [redirect, setRedirect] = useState(false);

    console.log("Signin user: ", userId);
    // create function for submit button 'onclick'
    const submitBtn = () => {
        console.log(usernameLogin);
        console.log(passwordLogin);
        if (usernameLogin === "" || passwordLogin === "") {
            console.log("Missing username or password");
        } else {
            const userLoginObj = {
                username: usernameLogin,
                password: passwordLogin
            }

            //create new user in database
            axios.post("/api/login",
                userLoginObj
            ).then((res) => {
                console.log(res.data);


                //once user is created store userid and personid in global context
                dispatch({ type: "UPDATE_USERID", payload: res.data.userId });
                dispatch({ type: "UPDATE_PERSONID", payload: res.data.personId });

                console.log("Redirect to profile");
                redirectHandler();
                console.log("Redirected to profile");
            }).catch(err => {
                console.log(err);
            });
        }
    }

    const redirectHandler = () => {
        setRedirect(true);
        console.log("redirect handler: ", redirect);
        renderRedirect();
    }

    const renderRedirect = () => {
        if (redirect) {
            console.log("render handler: ", redirect);
            return <Redirect to="/cam2" />
        }
    }

    return (
        <>
            <Container id="main-container">
                <Jumbotron id="main-jumbotron">
                    <h1>Sign In</h1>
                    <hr />
                    <Form id="signIn-form">
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label></Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                onChange={e => setUsernameLogin(e.target.value)}
                            />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone.
              </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label></Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                onChange={e => setPasswordLogin(e.target.value)}
                            />
                            <Form.Text className="text-muted">
                                We'll never share your password with anyone.
              </Form.Text>
                        </Form.Group>
                    </Form>
                    <br />
                    <ButtonGroup size="lg" className="mr-3">
                        <Button href='/' onClick={() => { submitBtn() }} variant="dark"
                            type="submit" id='right-button'>Go Back</Button>
                    </ButtonGroup>

                    <ButtonGroup size="lg" className="mr-3">
                        <Button onClick={() => { submitBtn() }} variant="dark"
                            type="submit" id='left-button'>Sign In</Button>
                    </ButtonGroup>
                    <hr></hr>
                    <h5>Protected Routes</h5>
                    <Link to="/cam2">Add Person (Cam 2)</Link>
                    <br></br>
                    <Link to="/profile">Profile</Link>
                    <br></br>
                    <Link to="/cam3">Identify Person (Cam 3)</Link>
                    <br></br>
                    <Link to="/contact">Contact</Link>
                    <br></br>
                    <Link to="/face">App2 (Face)</Link>
                    <br></br>
                    <Link to="/election">Election</Link>
                    <br></br>
                    <Link to="/ballot">Ballot</Link>
                    <br></br>
                    <Link to="/vote">Vote</Link>
                    <hr></hr>
                    <h5>Unprotected Routes</h5>
                    <Link to="/">Homepage</Link>
                    <br></br>
                    <Link to="/signup">Signup</Link>
                    <br></br>
                    <Link to="/signin">Signin</Link>

                </Jumbotron>
            </Container>
        </>
    );
};

// export component from SignUp.jsx
export default SignIn;