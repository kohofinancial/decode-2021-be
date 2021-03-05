// code for initializing connection to database;
const mongoose = require('mongoose');

// const MONGO_URL = "mongodb+srv://dbUser:<dbUserPassword>@default.4txhd.mongodb.net/db?retryWrites=true&w=majority";
// mongoose.connect(MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to db');
});

module.exports = db;