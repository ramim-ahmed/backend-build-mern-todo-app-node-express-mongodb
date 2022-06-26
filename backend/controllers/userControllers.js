const User = require("../models/userModel");

// get all users
const getAllUser = async (req, res) => {
  try {
    const users = await User.find({}).sort({ createdAt: "desc" }).exec();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// get single/one user by id
const getOneUser = async (req, res) => {
  try {
    const id = req.params.id;
    const singleUser = await User.findOne({_id: id});
    res.status(200).json(singleUser)
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// create new user
const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = new User({
      username,
      email,
      password,
    });
    const result = await newUser.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//update user information
const updateUser = async (req, res) => {
  try {
      const id = req.params.id;
      const {username, email, password} = req.body;
      const userGet = User.findOne({_id: id});
      const {username:name, password:pass, email:mail} = userGet;
      const updateUser = await User.updateOne({_id: id}, {
          username: username || name,
          email: email || mail,
          password: password || pass
      });
      res.status(200).json(updateUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// delete user from database
const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const deleteUser = await User.deleteOne({_id: id});
        res.status(200).json(deleteUser);
         
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// finally exports all controlerr methods
module.exports = {
  getAllUser,
  createUser,
  updateUser,
  deleteUser,
  getOneUser,
};
