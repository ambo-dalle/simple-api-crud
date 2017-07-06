const express = require('express')
const router = express.Router()
const RestaurantController = require('../controllers/restaurant_controller')

router.post('/', RestaurantController.createRestaurant )
router.get('/', RestaurantController.getall )
router.get('/:id', RestaurantController.findOneRestaurant )
router.delete('/:id', RestaurantController.deleteRestaurant )
router.put('/:id', RestaurantController.update)


module.exports = router
