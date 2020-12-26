const APIkey = "7e6f2baa9aed43c9b910792a2f2f005c"
const Subkey = "7047cf6a-5e66-42df-bbab-209db4f0ac10"

$(function () {
    var params = {
        // Request parameters
        "returnFaceId": "true",
        "returnFaceLandmarks": "false",
        "returnFaceAttributes": "{string}",
        "recognitionModel": "recognition_03",
        "returnRecognitionModel": "false",
        "detectionModel": "detection_02",
        "faceIdTimeToLive": "86400",
    };

    $.ajax({
        url: "https://westus.api.cognitive.microsoft.com/face/v1.0/detect?" + $.param(params),
        beforeSend: function (xhrObj) {
            // Request headers
            xhrObj.setRequestHeader("Content-Type", "application/json");
            xhrObj.setRequestHeader("https://apifaceaj.cognitiveservices.azure.com/", APIkey);
        },
        type: "POST",
        // Request body
        data: "{body}",
    })
        .done(function (data) {
            alert("success");
        })
        .fail(function () {
            alert("error");
        });
});