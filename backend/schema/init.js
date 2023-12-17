// this is file for data initializational:-
// initData.js
const mongoose = require('mongoose');
const User = require('./model');
const data = require("../heliverse_mock_data")

mongoose.connect("mongodb://127.0.0.1:27017/heliverse" , { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const initData = async () => {
  try {
    await User.deleteMany();
    await User.insertMany(data);

    console.log('Data initialized successfully');
  } catch (error) {
    console.error('Error initializing data:', error);
  } finally {
    mongoose.connection.close();
  }
};


initData();
