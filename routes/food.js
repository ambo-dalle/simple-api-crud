const express = require('express')
const router = express.Router()
const foodController = require('../controllers/food_controller')

router.post('/', foodController.createFood )
router.get('/', foodController.getall )
router.get('/:id', foodController.findOneFood )
router.delete('/:id', foodController.deleteFood )
router.put('/:id', foodController.update)



module.exports = router
