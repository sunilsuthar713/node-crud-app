const express = require("express");
const bodyParser = require("body-parser");

const utils = require("./utils");
const controllers = require("./controller");
const middleWares = utils.middlewares;

const router = express.Router();

// Task routes
router.post(
    '/task',
    // bodyParser.json,
    // bodyParser.urlencoded({extended: true}),
    middleWares.authenticateUser,
    controllers.v1.task.createTask
);
router.patch(
    '/task/:id',
    // bodyParser.json,
    // bodyParser.urlencoded({extended: true}),
    middleWares.authenticateUser,
    controllers.v1.task.updateTask
);
router.delete(
    '/task/:id',
    // bodyParser.json,
    // bodyParser.urlencoded({extended: true}),
    middleWares.authenticateUser,
    controllers.v1.task.deleteTask
);
router.get(
    '/task/list',
    // bodyParser.json,
    // bodyParser.urlencoded({extended: true}),
    middleWares.authenticateUser,
    controllers.v1.task.listTasks
);
router.post(
    '/task/metrics',
    // bodyParser.json,
    // bodyParser.urlencoded({extended: true}),
    middleWares.authenticateUser,
    controllers.v1.task.taskMetrics
);

module.exports = router;
