const Tasks = require('../models/taskModel');

/// get all task by user wise
const getAllTask = async (req, res) => {
     try {
        const taskAll = await Tasks.find().sort({createdAt: "asc"}).exec();
         res.status(200).json(taskAll)
     } catch (error) {
         res.status(500).json(error.message)
     }
}


// get one single task by id;

const getOneTask = async (req, res) => {
    try {
        const task = await Tasks.findOne({_id: req.params.id})
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json(error.message)
    }
}


/// create new task in database

const createNewTask = async (req, res) => {
    try {
        const {title, desc} = req.body;
        const newTask = new Tasks({
            title,
            desc,
        })
        const result = await newTask.save();
        res.status(200).json(result);

    } catch (error) {
        res.status(500).json(error.message)
    }
} 

/// update task by id
const updateTask = async (req, res) => {
     try {
         const id = req.params.id;
         const {title, desc} = req.body;
         const getTask = await Tasks.findOne({_id: id});
         const {title:head, desc:description} = getTask;
         const update = await Tasks.updateOne({_id: id}, {
              title: title || head,
              desc: desc || description,
         })
         res.status(200).json(update);
     } catch (error) {
         res.status(500).json(error.message)
     }
}

/// delete task by id;

const deleteTask = async ( req, res) => {
    try {
        const id = req.params.id;
        const removeTask = await Tasks.deleteOne({_id: id});
        res.status(200).json(removeTask)
    } catch (error) {
        res.status(500).json(error.message)
    }
}


module.exports = {
    getAllTask,
    getOneTask,
    createNewTask,
    updateTask,
    deleteTask
}