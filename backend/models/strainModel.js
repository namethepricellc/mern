const mongoose = require('mongoose')

const strainSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
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