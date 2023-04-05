const express= require('express')

const router= express.Router();

const {CreateContact,UpdateContact,DeleteContact,GetContacts}= require('../controllers/ContactController')
const {isAuthenticatedUser}= require('../authentication/jwttoken')
router.post('/Contact/create',isAuthenticatedUser,CreateContact);
router.get('/Get/Contacts',isAuthenticatedUser,GetContacts);
router.put('/Contact/update/:id',isAuthenticatedUser,UpdateContact);
router.delete('/Contact/delete/:id',isAuthenticatedUser,DeleteContact);

module.exports=router