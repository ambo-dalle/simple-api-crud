const express = require('express')
var app = express()
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/simple-api-crud')



app.listen(3000)

module.export = app
