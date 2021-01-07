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
            //        
            let idFace = await idHelper.Identify("5595", facesDetected)
            console.log(idFace, "ajidface")
            //  let DOTTHEN2 = idHelper.then(idFace({}))
            //         let facesId = DOTTHEN2
            //         let faceFour = facesId.forEach()

            //         //For each faceId found in the picture
            //         if (faceFour.candidates.length > 0) {
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

