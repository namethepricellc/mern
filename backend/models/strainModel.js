const mongoose = require('mongoose')

const strainSchema = new mongoose.Schema(
    {
        text: {
            type: String,
            required: [true, 'Please enter a strain name'],
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Strain', strainSchema)