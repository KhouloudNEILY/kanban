const router = require('express').Router();
const itemController = require("../controllers/item.controller");

router.get("/", itemController.selectAll);
router.post("/add",itemController.addTask);
router.delete("/delete/:taskname",itemController.deleteTask)
router.put("/update/:taskname",itemController.updatetask)
module.exports = router;
