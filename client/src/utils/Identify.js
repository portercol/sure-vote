import ApiCalls from "./ApiCalls";
import IdentificationHelper from "./IdentificationHelper";




export function letsSeeYourFace(GID, helperD, thisPicture, idCompleted, PID) {
    var reader = new FileReader();
    var renderOnload = reader.onload = () => {
        let idHelper = new IdentificationHelper();
        let DOTTHEN1 = idHelper.Detect(helperD)
        let facesDetected = DOTTHEN1
        if (facesDetected.length > 0) {
            let idFace = idHelper.Identify("5595", facesDetected)
            let DOTTHEN2 = idHelper.then(idFace({}))
            let facesId = DOTTHEN2
            let faceFour = facesId.forEach()
            //For each faceId found in the picture
            if (faceFour.candidates.length > 0) {
                // For each candidates, get the name
                var allCalls = []
                var foreach = faceFour.candidates.forEach((c) => {
                    const candidate = idHelper.Authentify("5595", "fa704750-0b81-43d0-a3a4-3e025f3eb2ba", c.confidence);
                    console.log(candidate, "canidatedata and confidence")
                    allCalls.push(candidate);
                });


                Promise.all(foreach.allCalls)
                    .then(value => {
                        idCompleted(
                            {
                                ok: true,
                                message: "I have found the following candidates: ",
                                candidates: value
                            }
                        );
                    })
            }
            else {
                this.identificationCompleteted(
                    {
                        ok: false,
                        message: "No matching candidates were found in the picture."
                    }
                );
            } return;

        }

    };

    return renderOnload()
}

