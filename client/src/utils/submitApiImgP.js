import ApiCalls from "./ApiCalls";
import axios from "axios";

export function submitToAgatha(personGroupId, personId, image, cb) {
    var reader = new FileReader();
    reader.onload = () => {
        var api = new ApiCalls();
        api.PostImage(api.personPictureEndPoint(personGroupId, personId), reader.result)
            .then(
                axios.post("/api/storePersonId",
                    {
                        id: "5fefba098379fe55c8a176e7",
                        personId: personId
                    })
                    .then(res => console.log(res))
                    .catch(err => console.log(err))
            )
            .catch(err => {
                console.log(err);
                alert("Failed record picture.  Please try again.");
            });
    };
    reader.readAsArrayBuffer(image);
};







