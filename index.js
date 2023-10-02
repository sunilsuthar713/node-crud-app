const path = require("path");

const env = process.env.ENVIRONMENT || "dev";
require("dotenv").config({
  path: path.resolve(__dirname, ".env")
});
const logger = require("./config/logger").createLogger();
const dbConfig = require("./config/db");
const app = require("./app");

const runServer = (app, appHost, appPort) => {
    const appServer = app.listen(appPort, appHost);
    process.on("warning", (e) => {
        logger.warn(e.stack);
    });

    const appError = (error) => {
        logger.error("ERROR IN SERVER:", error);
        process.exit(1);
    };

    const appListening = () => {
        logger.info("RUNNING SUCCESSFULLY ENV: ", env);
    };

    appServer.on("error", appError);
    appServer.on("listening", appListening);
    appServer.on("warning", (e) => console.warn(e.stack));
    process.on("warning", (e) => console.warn(e.stack));
};

(async () => {
  try {
    // Initialize Database
    await dbConfig.mySqlV1.database.createDbInstance();
    dbConfig.mySqlV1.database.syncDb();

    const host = process.env.HOST || "localhost";
    const port = process.env.PORT || "3000";
    runServer(app, host, port);
  } catch (error) {
    logger.error("Failed to start app:", error);
  }
})();
