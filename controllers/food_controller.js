const express = require('express')
const router = express.Router()
const Food = require('../models/food_models')

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
  }

 var getall = (req, res, next) => {
    Food.find()
      .exec(function(err, result) {
        if (result) {
          res.send(result);
        } else {
          res.send(`Error getall :\n ${err}`);
        }
      });
  }
  var findOneFood = (req,res,next)=>{
       Food.findOne({_id : req.params.id}, function(err,docs){
            if(err) {
                 res.send(err)
            } else {
                 res.send(docs)
            }
       })
  }

  var deleteFood = (req, res, next) => {
    let id = req.params.id;
    Food.remove({
      _id: id
    }, function(err) {
      if (!err) {
        res.send(`Success remove with id ${id} `);
      } else {
        res.send(`Error remove :\n ${error}`);
      }
    });
  }

  var update = (req, res,next)=>{
    Food.findById(req.params.id, (err, docs) => {
     if (err) res.send(err)
     Food.updateOne({
        _id: docs._id
     }, {
        $set: {
             name : req.body.name || docs.name,
             price : req.body.price || docs.price

        }
     }, (err, result) => {
        if (err) res.send(err)
        res.send(result)
     })
    })
  }



module.exports = {
     getall,
     createFood,
     deleteFood,
     update,
     findOneFood
}
