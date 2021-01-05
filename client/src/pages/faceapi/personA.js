import React, { Component, Fragment } from 'react';
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// import Modal from 'react-bootstrap/Modal'
// import Button from 'react-bootstrap/Button'
// import Form from 'react-bootstrap/Form'
import ApiCalls from "../../utils/ApiCalls";
// import Fetchino from 'react-fetchino';
// import { Loader } from 'react-overlay-loader';
import 'react-overlay-loader/styles.css';
// import { submitToAgatha } from '../../utils/submitApiImgP';



export function submit() {
    //this.props.personGroupId
    this.setState({ modalOpen: false, showLoadingOverlay: true }, () => {


        let body = {
            name: this.state.newPersonName,
            userData: ""
        };

        var api = new ApiCalls();
        api.Post(api.personsEndPoint(this.props.personGroupId), body)
            .then(rest => {
                // Tell the parent we've added a new item
                this.setState({ showLoadingOverlay: false }, () => {
                    this.closeModal();
                    this.props.onChanged();
                });
            });
    });
}


