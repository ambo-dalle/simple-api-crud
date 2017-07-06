const express = require('express')
const router = express.Router()
const Restaurant = require('../models/restaurant_models')

  createRestaurant =  (req, res, next) => {
       var insert = new Restaurant ({
            name: req.body.name ,
            owner: req.body.owner,
            address: req.body.address

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
    Restaurant.find()
      .exec(function(err, result) {
        if (result) {
          res.send(result);
        } else {
          res.send(`Error getall :\n ${err}`);
        }
      });
  }
  var findOneRestaurant = (req,res,next)=>{
       Restaurant.findOne({_id : req.params.id}, function(err,docs){
            if(err) {
                 res.send(err)
            } else {
                 res.send(docs)
            }
       })
  }

  var deleteRestaurant = (req, res, next) => {
    let id = req.params.id;
    Restaurant.remove({
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
    Restaurant.findById(req.params.id, (err, docs) => {
     if (err) res.send(err)
     Restaurant.updateOne({
        _id: docs._id
     }, {
        $set: {
             name : req.body.name || docs.name,
             owner : req.body.owner || docs.owner,
             address : req.body.address || docs.address
             
        }
     }, (err, result) => {
        if (err) res.send(err)
        res.send(result)
     })
    })
  }



module.exports = {
     getall,
     createRestaurant,
     deleteRestaurant,
     update,
     findOneRestaurant
}
