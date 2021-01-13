import ApiCalls from "./ApiCalls";
import IdentificationHelper from "./IdentificationHelper";

// we need to get the SERVERPID into the hard coded values


// athenticate faces with incoming value 
export async function letsSeeYourFace(GID, helperD, AthPID, con, idCompleted) {
    var reader = new FileReader();
    var renderOnload = reader.onload = async () => {
        let idHelper = new IdentificationHelper();
        let facesDetected = await idHelper.Detect(helperD)
        console.log(facesDetected, "dot then")
        if (facesDetected.length > 0) {


            let facesIdentified = await idHelper.Identify("5595", facesDetected)
            console.log(facesIdentified, "ajidface")
            await facesIdentified.forEach(async function (con) {
                // console.log(facesDetected, 'FD1')
                let face = await con.candidates
                console.log(face, 'FACE')

                await face.forEach(async function (idCompleted) {
                    // async Authentify(personGroupId, personId, confidence)
                    // let complete = idCompleted.confidence
                    let AGPID = await idCompleted.personId
                    let confidence = await idCompleted.confidence
                    let confidenceX = await confidence * 100
                    console.log(confidenceX, 'we got the confidence ')
                    console.log(AGPID, 'InPID')


                    // if your incoming PID doesnt mach our PID then we need to loop you back to the top
                    if (AGPID !== AthPID) {
                        // both errors work need to make them more offical and or a propt
                        console.error('your PID is not correct')
                        alert(
                            "We do not believe that this is you, please try again"
                        )
                    }
                    // both errors work need to make them more offical and or a propt

                    else if (confidence < 75.0) {
                        alert(
                            "We do not believe that this is you, please try again"
                        )
                        console.error('we do not think this is you')

                    }
                    else {
                        var allCalls = idHelper.Authentify("5595", AGPID, idCompleted.confidence)
                        alert(
                            "Thank you for signing in"
                        )
                        return allCalls
                    }

                    // console.log(allCalls, 'candidates')
                })

            })
        }
    }




    await renderOnload()

};


//     .then(allCalls.candidate)
// return idCompleted(
    //     {
        //         ok: true,
        //         message: "I have found the following candidates: ",
        //         candidates: allCalls[1]
        //     }
        // );

        //         let faceFour = facesId
        //         let facesId = DOTTHEN2

        //         //For each faceId found in the picture
            //             // For each candidates, get the name
            //             var allCalls = []
            //             var foreach = faceFour.forEach()
            //             var candidate = idHelper.Authentify("5595", "fa704750-0b81-43d0-a3a4-3e025f3eb2ba", c.confidence);
            //             const canidateR = this.foreach.candidate
            //             console.log(candidateR, "canidatedata and confidence")
            //         };
            //         // allCalls.push(candidateR);


            //         Promise.all(foreach.allCalls.canidateR)
            //             .then(value => {
                //                 idCompleted(
                    //         const candidate = idHelper.Authentify("5595", "3300f642-91db-4165-b27d-270559430b26", face);


                    // facesIdentified is the face id from above 
                    //     await allCalls.forEach(async function (face) {
                        //         // this will be hard coded for now +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                        //         // need the if statment hear to pass or not
                        //         // this will works as .Authentify(GID, pid, face); and will be un hard coded
                        //         var allCalls = []
                        //         console.log(candidate, 'this is your canidate')
                        //         allCalls.push(candidate);
                        // in my hopes and deams this will be the the canidate... as of right now i belive it is and that is 7:44 1/7/2021
                        // })
                        // Promise.all(
                            //     allCalls.map(async (allCalls) => {
                //         const confidence = await allCalls.candidate.confidence
                //         console.log(confidence, 'this is canadate.......')

                //         return confidence
                //     })
                // )
                // if (facesIdentified.length > 0) {

                // let candidate = await idHelper.Authentify(con.facesIdentified)


                // console.log(mapped, 'this is mappy')
                // console.log(mapped, 'nice')
                // let confid = Faces.map([0])
                // }
                // async Authentify(personGroupId, personId, confidence)
                // console.log(candidates, 'candidate')
                //     let conFid = candidates.length
                //     console.log(conFid, 'allCalls 1')
                // }
                // let mappy = mapped.map("5595", "bb66d74a-acab-4d3c-9cbf-1428680f878a", candidates.confidence)