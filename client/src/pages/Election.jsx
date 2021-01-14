import React from 'react';
import Navbar from "../components/Navbar.jsx";
import { useGlobalContextAuthUser } from '../utils/GlobalContextAuthUser.js';
import { Redirect } from "react-router-dom";

const Election = () => {
    const [userId] = useGlobalContextAuthUser();
    console.log("Election user: ", userId);

    //reroute to signin if not authenticated
    if (!userId.id) {
        return (<Redirect to="/signin" />);
    }

    return (
        <>
            <Navbar />
            <h1>Election Page</h1>
        </>
    )
}

export default Election;