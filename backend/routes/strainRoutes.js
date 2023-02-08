const express = require('express')
const router = express.Router()
const {
    getStrains,
    setStrain,
    updateStrain,
    deleteStrain
} = require('../controllers/strainController')

router.route('/').get(getStrains).post(setStrain)
router.route('/:id').delete(deleteStrain).put(updateStrain)

module.exports = router