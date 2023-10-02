const Sequelize = require('sequelize');
const logger = require("../../logger").getLogger();
const task = require("./task");

let sequelize;
let models = {};

const createDbInstance = async () => {
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
        host: process.env.DB_HOST,
        dialect: 'mysql'
    });

    try {
        await sequelize.authenticate();
        logger.info("Database connection successful");
    } catch(error) {
        logger.error("Error in connecting to database", error);
        throw Error("DB Connection failed");
    }

    return sequelize;
}

const getDbInstance = async () => {
    if (sequelize) return sequelize;
    return await createDbInstance();
}

const syncDb = () => {
    // Ensuring db has all tables required
    models['task'] = sequelize.define("Task", task);
    sequelize
        .sync()
        .then(() => {
            logger.info("Successfully synched db and all tables");
        })
        .catch((err) => {
            logger.error("Error in synchronizing the database:", err);
        });
}

module.exports = {
    createDbInstance,
    getDbInstance,
    syncDb,
    models
};