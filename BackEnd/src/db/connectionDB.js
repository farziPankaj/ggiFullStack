const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

function connectDB(url) {
    console.log("-----------------In connectDB file & connectDB method-------------");
    return mongoose.connect(url)
}

module.exports = connectDB;