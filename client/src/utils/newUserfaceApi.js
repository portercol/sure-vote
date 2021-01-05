// this kinda works, i have it so that it will add a person when called but it will not close the modal, that is a feature we may not need
import ApiCalls from "./ApiCalls";



export function newUserApi(Gid, newPnam, cb) {
    //this.props.personGroupId


    let body = {
        name: "class demo",
        userData: "1234"
    };

    var api = new ApiCalls();
    api.Post(api.personsEndPoint("5595"), body)
        .then(cb)
};

