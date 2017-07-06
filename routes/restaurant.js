const express = require('express')
const router = express.Router()
// const foodController = require('../controllers/food_controller')
// const foodController = require('../controllers/restauran_controller')


router.get('/', (req,res,next)=>{
     res.send('Tes')
} )



module.export = router
