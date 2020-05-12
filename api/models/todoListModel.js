"use strict";
var mongoose = require("mongoose"),
  schema = mongoose.Schema;

var taskSchema = new schema({
  name: {
    type: String,
    required: [true, "Kindly enter the name of the task"]
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [
      {
        type: String,
        enum: ["pending", "ongoing", "completed"]
      }
    ],
    default: ["pending"]
  }
});

module.exports = mongoose.model("tasks", taskSchema);
