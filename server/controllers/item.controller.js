// DELETE THIS LINE


// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// const db = require("../database-mysql");
const Task = require('../database-mongo/Item.model.js');

// UNCOMMENT IF USING MYSQL WITH CALLBACKS
// const selectAll = function (req, res) {
//   db.query("SELECT * FROM items", (err, items, fields) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.status(200).send(items);
//     }
//   });
// };

// UNCOMMENT IF USING MONGOOSE WITH PROMISES
// const selectAll = function (req, res) {
//   Task.find({})
//     .then((items) => {
//       res.status(200).send(items);
//     })
//     .catch((error) => {
//       res.status(500).send(error);
//     });
// };



// UNCOMMENT IF USING MONGOOSE WITH PROMISES & ASYNC AWAIT
const selectAll = async function (req, res) {
  try {
    const task = await Task.find();
    res.status(200).send(task);
  } catch (error) {
    res.status(500).send(error);
  }
};




const addTask= async function (req, res) {
    const todo={taskname:req.body.taskname,state:req.body.state}
    try {
      const task = await Task.create(todo);
      res.status(201).send(task);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
const deleteTask= async function (req, res) {
    const todo={taskname:req.body.taskname}
    try {
      const task = await Task.deleteOne(todo);
      res.status(201).send(task);
    } catch (error) {
      res.status(500).send(error);
    }
  };

  const updatetask= async function (req, res) {
    const taskname={taskname:req.params.taskname}
    const state={state:req.body.state}
    try {
      const task = await Task.updateOne(taskname,state);
      res.status(201).send(task);
    } catch (error) {
      res.status(500).send(error);
    }
  };

module.exports = { selectAll,addTask,deleteTask,updatetask };
