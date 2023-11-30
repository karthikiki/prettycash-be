const express = require('express')
const { addTransection, getAllTransection, editTransection } = require('../controllers/trans')


// router
const router = express.Router()


//route
//add transection
router.post("/add-transection", addTransection)
// Edit
router.post("/edit-transection", editTransection)
//Delete
//get transections
router.post("/get-transection", getAllTransection)

module.exports = router