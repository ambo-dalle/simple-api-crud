const express = require('express')
const router = express.Router()
const foodController = require('../controllers/food_controller')
// const foodController = require('../controllers/restauran_controller')



router.post('/', foodController.createFood )
router.get('/', foodController.getall )
router.delete('/', foodController.deleteFood )
router.put('/', foodController.update)



module.exports = router
