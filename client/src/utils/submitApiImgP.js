import ApiCalls from "./ApiCalls";
import axios from "axios";
import React, { useState, useRef } from 'react';


export async function submitToAgatha(personGroupId, personId, image, cb) {
    var reader = new FileReader();
    var api = new ApiCalls();
    var renderOnload = reader.onload = async () => {


        var results = await api.PostImage(api.personPictureEndPoint(personGroupId, personId), reader.result).then((res) => res.json())
        console.log(results, 'new result')
        // var resultsE = await results.error.message
        // console.log(resultsE, 'new result')




        // if (results === ) {
        //     window.alert(
        //         "your face was not detected please look right at the camera"
        //     )
        //     return true

        // } else if (results === ("No face detected in the image.")) {
        //     window.alert(
        //         ""
        //     )
        // }

        return results
    };


    reader.readAsArrayBuffer(image);


    // renderOnload()
};






// try { submitToAgatha("5595", personId, reader.result) }
// catch (e) {
//     if (e.personId === []) {
//         console.error(e.personId + ': ' + e.message)
//     } else if (e instanceof RangeError) {
//         console.error(e.name + ': ' + e.message)
//     }
//     // ... etc
// }

