const express = require("express");
const appRouter = require("./app-routes");
const { middlewares } = require("./utils");

const app = express();

// Registering the routes
app.get("/", (req, res) => {
  return res.render("index", {
    message: "Server is running!"
  });
});

app.use("/freedo", appRouter);

app.use(middlewares.routeNotFound());

module.exports = app;
