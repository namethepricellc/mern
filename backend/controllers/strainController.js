const asyncHandler = require('express-async-handler')

const Strain = require('../models/strainModel')
const User = require('../models/userModel')

// @desc: Get all strains
// @route: GET /api/strains
// @access: Private
const getStrains = asyncHandler(async (req, res) => {
  const strains = await Strain.find({ user: req.user.id })
  res.status(200).json(strains)
})

// @desc: Set a strain
// @route: POST /api/strains
// @access: Private
const setStrain = asyncHandler(async (req, res) => {
  if(!req.body.text) {
    res.status(400)
    throw new Error('Please Enter a Strain')
  }

  const strain = await Strain.create({
    text: req.body.text,
    user: req.user.id
  })

  res.status(200).json(strain)
})

// @desc: Update a strain
// @route: PUT /api/strains/:id
// @access: Private
const updateStrain = asyncHandler(async (req, res) => {
  const strain = await Strain.findById(req.params.id)

  if(!strain) {
    res.status(400)
    throw new Error('Strain not found')
  }

  // Check if user exists
  if(!req.user) {
    res.status(400)
    throw new Error('User not found')
  }

  // Check if user is authorized to update strain
  if(strain.user.toString() !== req.user._id.toString()) {
    res.status(401)
    throw new Error('Not authorized to update this strain')
  }



  const updatedStrain = await Strain.findByIdAndUpdate(req.params.id, req.body, {new: true})

  res.status(200).json(updatedStrain)
})

//@desc: Delete a strain
// @route: DELETE /api/strains/:id
// @access: Private
const deleteStrain = asyncHandler(async (req, res) => {
  const strain = await Strain.findById(req.params.id)

  if(!strain) {
    res.status(400)
    throw new Error('Strain not found')
  }

  // Check if user exists
  if(!req.user) {
    res.status(400)
    throw new Error('User not found')
  }

  // Check if user is authorized to update strain
  if(strain.user.toString() !== req.user._id.toString()) {
    res.status(401)
    throw new Error('Not authorized to update this strain')
  }

  await strain.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getStrains,
  setStrain,
  updateStrain,
  deleteStrain
}