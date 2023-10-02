// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();
// const port = process.env.PORT || 3000;

// app.use(bodyParser.json());

const path = require("path");
const express = require("express");
// const cookieParser = require("cookie-parser");
// const compression = require("compression");
// const bearerToken = require("express-bearer-token");
// const favicon = require("serve-favicon");
// const expressWinstonLogger = require("express-winston");
// const helmet = require("helmet");

// const config = require("../config");
// const utils = require("./utils");
const appRouter = require("./app-routes");
const middleawares = require("./utils/middlewares");
const { middlewares } = require("./utils");
// const logger = require("./config/logger").getLogger();

// const middlewares = utils.middleawares;

const app = express();
// app.use(helmet());
// app.use(
//   expressWinstonLogger.logger({
//     winstonInstance: logger,
//     meta: true,
//     expressFormat: false
//   })
// );

// app.use(middlewares.corsMiddleware());
// app.use(compression());
// app.use(bearerToken());
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "../static")));
// app.use(favicon(path.join(__dirname, "../static/favicon.png")));

// Registering the routes
app.get("/", (req, res) => {
  return res.render("index", {
    message: "Server is running!"
  });
});

app.use("/freedo", appRouter);

app.use(middlewares.routeNotFound());

module.exports = app;
