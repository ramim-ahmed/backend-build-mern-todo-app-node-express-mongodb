const express = require('express');
const { getAllTask, createNewTask, updateTask, deleteTask, getOneTask } = require('../controllers/taskController');
const router = express.Router();


router.route('/').get(getAllTask).post(createNewTask);
router.route('/:id').put(updateTask).delete(deleteTask);
router.route('/:id').get(getOneTask);



module.exports = router;