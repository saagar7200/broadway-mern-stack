const express = require('express')
const User = require('../models/user.model')
const {getAllUser,create,update,getById,deleteUser} = require('../controllers/user.controller')

const router = express.Router()

// get all users
router.get('/',getAllUser)

//  create user
 router.post('/',create)

// get user by id
router.get('/:id',getById)

// update user by id
router.patch('/:id',update)

// delete user
router.delete('/:id',deleteUser)
 





module.exports = router