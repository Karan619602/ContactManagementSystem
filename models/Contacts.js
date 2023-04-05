const mongoose=require('mongoose')

const Contactschema = new mongoose.Schema({
    firstName:{
        type: String,
        required :[true, 'please enter your firstname'],
    },
    LastName:{
        type: String,
        required :[true, 'please enter your Lastname'],
    },
    email:{
      type: String,
      required :[true, 'please enter your email'],
            },
    PhoneNo:{
    type: String,
     required :[true, 'please enter your ten digit PhoneNo'],
    },
    UserId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
      createdAt:{
          type:Date,
          Default:Date.now()
      }
})
 
  const Contacts= mongoose.model('Contact', Contactschema)

  
  module.exports = Contacts;