const mongoose = require("mongoose");
const db = require("./index.js");

const taskSchema = new mongoose.Schema({
  taskname: String,
  state: String,
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;