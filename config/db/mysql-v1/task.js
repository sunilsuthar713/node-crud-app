const Sequelize = require("sequelize");

const Task = {
  taskId: {
    type: Sequelize.STRING,
    allowNull: false,
    primarKey: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  status: {
    type: Sequelize.ENUM("INPROGRESS", "OPEN", "COMPLETED", "DELETED"),
    defaultValue: "OPEN",
  },
  createdAt: {
    type: Sequelize.DataTypes.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: false
  }
};

module.exports = Task;
