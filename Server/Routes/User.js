const express = require('express');
const router = express.Router();
const userController = require('../Controllers/UserController');

// Route add user
router.post('/add', userController.AddUser);

// Route update user
router.put('/:id/modify', userController.UpdateUser);

// Route get user
router.get('/:id/get', userController.GetUser);

module.exports = router;
