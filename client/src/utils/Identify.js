import ApiCalls from "./ApiCalls";
import IdentificationHelper from "./IdentificationHelper";



// athenticate faces with incoming value 
export async function letsSeeYourFace(GID, helperD, PID, con, idCompleted) {
    var reader = new FileReader();
    var renderOnload = reader.onload = async () => {
        let idHelper = new IdentificationHelper();
        let facesDetected = await idHelper.Detect(helperD)
        console.log(facesDetected, "dot then")
        if (facesDetected.length > 0) {


            let facesIdentified = await idHelper.Identify("5595", facesDetected)
            console.log(facesIdentified, "ajidface")
            await facesDetected.forEach(async function (facesIdentified) {
                var face = facesIdentified

                // facesIdentified is the face id from above 
                if (face.length > 0) {
                    var allCalls = []
                    await allCalls.forEach(async function (face) {
                        // this will be hard coded for now +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                        const candidate = idHelper.Authentify("5595", 'fa704750-0b81-43d0-a3a4-3e025f3eb2ba', face);
                        console.log(candidate, 'this is canadate.......')
                    })

                }

            })
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
            //                     {
            //                         ok: true,
            //                         message: "I have found the following candidates: ",
            //                         candidates: value
            //                     }
            //                 );
            //             })
        }
        else {
            //         this.identificationCompleteted(
            //             {
            //                 ok: false,
            //                 message: "No matching candidates were found in the picture."
            //             }
            //         );
            console.log('this is else')
        };

    }



    return renderOnload()
};

