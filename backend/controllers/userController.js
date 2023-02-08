// @desc Register a new user
// @route POST /api/users
// @access Public
const registerUser = async (req, res) => {
    res.json({ message: 'Register a new user' })
}

// @desc Authenticate user & get token
// @route POST /api/users/login
// @access Public
const loginUser = async (req, res) => {
    res.json({ message: 'Login User' })
}

// @desc Get User Data
// @route GET /api/users
// @access Public
const getMe = async (req, res) => {
    res.json({ message: 'User Data' })
}

module.exports = {
    registerUser,
    loginUser,
    getMe
}