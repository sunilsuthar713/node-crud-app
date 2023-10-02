const httpResponder  = require("./http-responder");

const authenticateUser = () => {
    return function (req, res, next) {
        // OUT OF SCOPE
        next();
    };
};

const routeNotFound = () => {
    return function (req, res, next) {
        let httpErr = Error("Requested route not found!");
        return httpResponder.sendError(res, httpErr, 404);
    };
};

module.exports = {
    authenticateUser,
    routeNotFound
}