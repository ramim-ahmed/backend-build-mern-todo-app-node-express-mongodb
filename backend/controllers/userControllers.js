const User = require('../models/userModel')

// get all users
const getAllUser = async (req, res) => {
     try {
         const users = await User.find({}).sort({ createdAt: 'desc'}).exec();
         res.status(200).json(users)
     } catch (error) {
        res.status(500).send(error.message)
     }
}

// get single/one user by id
const getOneUser = (req, res) => {
    const id = req.params.id;
    res.status(200).json({
        message: `get one user ${id}`
    })
}


// create new user
const createUser = async (req, res) => {
    try {
        const {username, email, password} = req.body;
        const newUser = new User({
            username,
            email,
            password
        });
        const result = await newUser.save();
        res.status(201).json(result)
    } catch (error) {
        res.status(500).send(error.message)
    }
}


//update user information
const updateUser = (req, res) => {
    const id = req.params.id;
    res.status(200).json({
        message : `${id} user updated`
    })
}


// delete user from database
const deleteUser = (req, res) => {
    const id = req.params.id;
    res.status(200).json({
        message : `${id} user successfully remove`
    })
}

// finally exports all controlerr methods
module.exports = {
    getAllUser,
    createUser,
    updateUser,
    deleteUser,
    getOneUser,
}