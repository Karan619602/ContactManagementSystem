const jwt = require('jsonwebtoken')
const { User } = require('../models/index')
const bcrypt = require('bcrypt');
const { sendToken } = require('../authentication/jwttoken')

//Signup user => /api/v1/Signup

const RegisterUser = (async (req, res, next) => {


    const {  username, password } = req.body;
    const user = await User.create({
        username,
        password
    })
    sendToken(user, 200, res)

})

//login user => /api/v1/login


const login = (async (req, res, next) => {
    const { username, password } = req.body;

    const user = await User.findOne({
        where: {
            username: username
        }
    })
    console.log(user);
    if (!user) {
        return res.status(401).json({ message: 'Auth failed!' })
    }
    bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
            return res.status(401).json({ message: 'Auth failed!' });
        }

    })
    console.log("fffff");
    sendToken(user, 200, res)
})

//logout user => /api/v1/logout


const logout = (async (req, res, next) => {
    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })
    res.send({
        success: true,
        message: 'logout'
    })
})

module.exports = { RegisterUser, login, logout }
