
import ApiCalls from "./ApiCalls";




export function newUserApi(e) {
    //this.props.personGroupId
    this.setState({ modalOpen: false, showLoadingOverlay: true }, () => {
        let body = {
            name: this.state.newPersonName,
            userData: ""
        };

        var api = new ApiCalls();
        api.Post(api.personsEndPoint(this.props.personGroupId), body)
            .then(rest => {
                // Tell the parent we've added a new item
                this.setState({ showLoadingOverlay: false }, () => {
                    this.closeModal();
                    this.props.onChanged();
                });
            });
    });
}


    // submit = e => {
    //     this.setState({ modalOpen: false, showLoadingOverlay: true }, () => {
    //         submitToAgatha(this.props, this.state.picture, () => {
    //             this.setState({ showLoadingOverlay: false }, () => {
    //                 this.closeModal();
    //                 this.props.onChanged();
    //             });
    //         })

    //     });
    // }