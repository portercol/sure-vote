// this is built right now on click create a new PID (personID) in this case the Groupe ID has been hard Coded
import ApiCalls from "./ApiCalls";



export async function newUserApi(Gid, newPnam, cb) {
    // GID is "5595"
    let body = {
        name: "class demo",
        userData: "1234",
    };

    var api = new ApiCalls();
    var results = await api.Post(api.personsEndPoint("5595"), body).then((res) => res.json())

    console.log(results, "aj results")
    return results
};

