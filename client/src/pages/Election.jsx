import React from 'react';
import Navbar from "../components/Navbar.jsx";
import { useGlobalContextAuthUser } from '../utils/GlobalContextAuthUser.js';

const Election = () => {
    const [userId] = useGlobalContextAuthUser();
    console.log("Election user: ", userId);

    return (
        <>
            <Navbar />
            <h1>Election Page</h1>
        </>
    )
}

export default Election;