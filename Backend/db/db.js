const mongoose = require('mongoose');

const uri = "mongodb+srv://Rahul:qwertyuiop@uber.pkyrqzu.mongodb.net/?retryWrites=true&w=majority&appName=uber";

async function connectToDb() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB Atlas successfully!");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}

module.exports = connectToDb;