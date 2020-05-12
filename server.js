var express = require("express"),
  app = express(),
  port = process.env.port || 4500,
  mongoose = require("mongoose"),
  task = require("./api/models/todoListModel"),
  bodyParser = require("body-parser"),
  routes = require("./api/routes/todoListRoutes");

// monogose instance connection url connection
mongoose.connect("mongodb://localhost/tododb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.listen(port);

console.log(`todo list RESTFUL API server started on ${port}`);
