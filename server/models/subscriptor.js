const mongoose = require('mongoose')


const subcriptorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    job: {
        type: String,
        required: true,
        trim: true,
    },
    country: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    telephone: {
        type: String,
        trim: true,
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})


const Subscriptor = mongoose.model('subscriptor', subcriptorSchema)

module.exports = Subscriptor