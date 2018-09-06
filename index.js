const hello = require('./hello');
const human = require('./human');

hello('Olá galera do Workshop de Node.js');
human.hello('Olá galera do Workshop de Node.js');

const mongoose = require('mongoose');
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('MongoDB connected');
});

mongoose.connect('mongodb://127.0.0.1/test');