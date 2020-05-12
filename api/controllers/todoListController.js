"use strict";
var mongoose = require("mongoose"),
  task = mongoose.model("tasks");

exports.list_all_tasks = (req, res) => {
  task.find({}, (err, task) => {
    if (err) {
      res.send(err);
    }
    res.json(task);
  });
};

exports.create_a_task = (req, res) => {
  var newTask = new task(req.body);

  newTask.save((err, task) => {
    if (err) {
      res.send(err);
    }
    res.json(task);
  });
};

exports.read_a_task = (req, res) => {
  task.findById(req.params.taskId, (err, task) => {
    if (err) {
      res.send(err);
    }
    res.json(task);
  });
};

exports.update_a_task = (req, res) => {
  task.findOneAndUpdate(
    { _id: req.params.taskId },
    req.body,
    { new: true },
    (err, task) => {
      if (err) {
        res.send(err);
      }
      res.json(task);
    }
  );
};

exports.delete_a_task = (req, res) => {
  task.deleteOne({ _id: req.params.taskId }, (err, task) => {
    if (err) {
      res.send(err);
    }

    if (task.deletedCount > 0) {
      res.json({ message: "Task successfully deleted!  " });
    } else {
      res.json({ message: "Task not found to delete!" });
    }
  });
};
