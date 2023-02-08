const express = require('express')
const router = express.Router()
const {
    getStrains,
    setStrain,
    updateStrain,
    deleteStrain
} = require('../controllers/strainController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getStrains).post(protect, setStrain)
router.route('/:id').delete(protect, deleteStrain).put(protect, updateStrain)

module.exports = router