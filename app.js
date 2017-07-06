var express = require('express')
var app = express()
var mongoose = require('mongoose');
var bodyParser = require('body-parser')
var cors = require('cors')


var db_config = {
     development : 'mongodb://localhost/simple-api-crud',
     test :  'mongodb://localhost/simple-api-crud-test'
}

var app_env = app.settings.env

mongoose.Promise = require('bluebird')

mongoose.connect(db_config[app_env], function(){
     console.log('connect to db' + db_config[app_env]);
})
var foods = require('./routes/food');
var restaurants = require('./routes/restaurant');

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))

app.use('/foods', foods)
app.use('/restaurants', restaurants)


app.listen(3000, function(){

})

module.exports = app;
