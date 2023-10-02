const UUID = require("uuid");
const logger = require("../config/logger").getLogger();

const models = require("../config/db/mysql-v1").database.models;

class TaskService {
    constructor() {
        this.model = 'Task'
        this.db = models.Task;
    }

    async createTask(title, description = '') {
        try {
            logger.info("Creating a new task");
            let taskId = UUID.v1();
            this.db.create({taskId, title, description, status: 'OPEN'});
            logger.info("task created successfully");
            return {taskId};
        } catch (error) {
            logger.error("Error in creating task:", error);
            throw new Error("Error in creating a task");
        }
    }
}

module.exports = TaskService;
