const mongoose = require('mongoose');
require('dotenv').config()

function initDatabase(){
    mongoose.set('strictQuery', true)
    return mongoose.connect(process.env.CONNECTIONSTRING);
}

module.exports = initDatabase;