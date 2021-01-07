module.exports = (data) => {
    if (data.req.user) {
        return true;
    } else {
        return false;
    }
}