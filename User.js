const mongoose = require('mongoose');

const User = mongoose.Schema({
    name: String,
    created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', User);