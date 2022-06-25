const express = require('express');
const { getAllUser, createUser, updateUser, deleteUser, getOneUser } = require('../controllers/userControllers');
const router = express.Router();


router.route('/').get(getAllUser).post(createUser);
router.route('/:id').put(updateUser).delete(deleteUser);
router.route('/:id').get(getOneUser);

module.exports = router;