const asyncHandler = require('express-async-handler')

// @desc: Get all strains
// @route: GET /api/strains
// @access: Private
const getStrains = asyncHandler(async (req, res) => {
  res.status(200).json({msg: 'Get a strain'})
})

// @desc: Set a strain
// @route: POST /api/strains
// @access: Private
const setStrain = asyncHandler(async (req, res) => {
  if(!req.body.text) {
    res.status(400)
    throw new Error('Please add a strain')
  })

  res.status(200).json({msg: 'Set a strain'})
}

// @desc: Update a strain
// @route: PUT /api/strains/:id
// @access: Private
const updateStrain = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: `Update strain ${req.params.id }`})
})

// @desc: Delete a strain
// @route: DELETE /api/strains/:id
// @access: Private
const deleteStrain = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: `Delete strain ${req.params.id }`})
})

module.exports = {
  getStrains,
  setStrain,
  updateStrain,
  deleteStrain
}