const mongoose = require('mongoose');
require('dotenv').config()

function initDatabase(){
    mongoose.set('strictQuery', true)
    return mongoose.connect('mongodb://0.0.0.0:27017/sales-it');
}

module.exports = initDatabase;