const mongoose = require('mongoose');

function connectToDb() {

    mongoose.connect(process.env.DB_CONNECT, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    })
    .then(() => {
        console.log("Connected check  to MongoDB successfully!");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
    });
}

module.exports = connectToDb;
