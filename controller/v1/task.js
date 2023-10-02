const logger = require("../../config/logger").getLogger();
const { httpResponder } = require("../../utils");
const TaskService = require("../../service").task;

const ts = new TaskService();

const createTask = async (req, res, next) => {
    try {
        let body = req.body;
        if (!body.title) {
            logger.error("Missing title in the create task request")
            return httpResponder.sendError(res, Error("missing required parameters"), 400)
        }
        const result = await ts.createTask(body.title, body?.description);
        return httpResponder.sendSuccess(res, result);
    } catch (err) {
        logger.error("Error in creating task:", err);
        return httpResponder.sendError(res, err, 400);
    }
};

const updateTask = async (req, res, next) => {
    try {

    } catch (err) {
        return err;
    }
};

const deleteTask = async (req, res, next) => {
    try {

    } catch (err) {
        return err;
    }
};

const listTasks = async (req, res, next) => {
    try {

    } catch (err) {
        return err;
    }
};

const taskMetrics = async (req, res, next) => {
    try {

    } catch (err) {
        return err;
    }
};

module.exports = {
    createTask,
    updateTask,
    deleteTask,
    listTasks,
    taskMetrics
};
