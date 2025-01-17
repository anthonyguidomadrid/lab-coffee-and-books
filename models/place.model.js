const mongoose = require('mongoose')
const Schema = mongoose.Schema

const placeSchema = new Schema({
    name: { type: String, required: true},
    type: { type: String, enum: ['coffee shop', 'bookstore'], required: true },
    location: {                 
        type: {
            type: String,
        },
        coordinates: {
            type: [Number],
            required: true
        },
    },
}, {
    timestamps: true
})

placeSchema.index({ location: '2dsphere' })        

const Place = mongoose.model('Place', placeSchema)

module.exports = Place