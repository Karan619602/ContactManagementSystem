const express= require('express')

const router= express.Router();

const {RegisterUser,login,logout}= require('../controllers/UserAuth')
const {isAuthenticatedUser}= require('../authentication/jwttoken')
router.post('/Signup',RegisterUser);
router.post('/login',login);
router.post('/logout',logout);
router.get('/profile',isAuthenticatedUser);

module.exports=router