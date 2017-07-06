const express = require('express')
const router = express.Router()
const foodController = require('../models/food_model')
const foodController = require('../controllers/restauran_controller')



  createFood =  (req, res, next) => {
       var insert = new Food ({
            name: req.body.name ,
            price: req.body.price

       })
       insert.save((err, docs) =>{
            if (err) {
                 res.send(err.message)
            } else {
                 res.send(docs)
            }
       })
  },

  getall: (req, res, next) => {
    Food.find()
      .exec(function(err, result) {
        if (result) {
          res.send(result);
        } else {
          res.send(`Error getall :\n ${err}`);
        }
      });
  },



module.exports = {

}
