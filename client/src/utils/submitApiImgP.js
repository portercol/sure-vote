import ApiCalls from "./ApiCalls";
export function submitToAgatha(personGroupId, personId, image, cb) {
    var reader = new FileReader();
    reader.onload = () => {
        var api = new ApiCalls();
        api.PostImage(api.personPictureEndPoint(personGroupId, personId), reader.result)
            .then(cb)


    };
    reader.readAsArrayBuffer(image);
};







