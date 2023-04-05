const { logout } = require('../controllers/UserAuth')
const  User = require('../models/User')
const jwt = require('jsonwebtoken')

const sendToken = (user, statusCode, res) => {
    // Create jwt token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_TIME
    })

   
    const options = {
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 1000
        ),
        httpOnly: true
    }


    res.status(statusCode).cookie('token', token, options).json({
        success: true,
        token,
        user
    }) 
}

const isAuthenticatedUser = (async (req, res, next) => {
    try {
        const { token } = req.cookies;


        if (!token) {
            return next(new Errorhandling('user not verify', 401))
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = await User.findById(decoded.id)
        console.log(req.user);
        next()
    }
    catch (error) {
        return res.status(401).json({ message: 'Login or Signup first For Accessing the Contacts' });
    }

})


module.exports = { sendToken, isAuthenticatedUser }