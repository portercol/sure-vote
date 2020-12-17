import React from "react";
import { Jumbotron, Form, Button, Row, Col } from "react-bootstrap";
import "./SignUp.css";

const SignUp = () => {
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

              {/* <Form.Group id="formGridCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group> */}

              <Button variant="secondary" type="submit" size="lg" id="signup-button">
                Submit
              </Button>
            </Form>
          </Jumbotron>
        </Col>
        <Col xs lg={3}></Col>
      </Row>
    </>
  );
};

export default SignUp;
