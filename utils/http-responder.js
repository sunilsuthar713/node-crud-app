const lodash = require("lodash");

module.exports = {
  sendError: function (res, error, statusCode = 400) {
    res.status(statusCode).json({
      message: error.message,
      statusCode: statusCode
    });
  },
  sendSuccess: function (res, okResult) {
    const result = lodash.isObjectLike(okResult) ? okResult : { result: okResult };
    res.status(200).json({data: result, statusCode: 200});
  }
};