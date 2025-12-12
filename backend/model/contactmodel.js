const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    email: String,
    message: String
})

module.exports = mongoose.model('contact', contactSchema);