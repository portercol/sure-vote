// this is built right now on click create a new PID (personID) in this case the Groupe ID has been hard Coded
import ApiCalls from "./ApiCalls";
export function newUserApi(Gid, newPnam, cb) {
    // GID is "5595"
    let body = {
        name: "class demo",
        picture: "",
        userData: "1234",
    };

    var api = new ApiCalls();
    api.Post(api.personsEndPoint("5595"), body)
        .then(cb)

};

console.log