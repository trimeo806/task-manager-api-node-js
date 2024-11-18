const express = require('express');
const {
  getAllTasks,
  createNewTask,
  getTask,
  updateTask,
  deleteTask,
} = require('../controllers/task.controller');

const router = express.Router();

router.route('/').get(getAllTasks).post(createNewTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
