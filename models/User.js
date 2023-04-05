const mongoose=require('mongoose')
const bcrypt = require('bcrypt');

const userSchema =new mongoose.Schema({
    username:{
        type: String,
        required :[true, 'please enter your name'],
        maxlength:[30,'Your name cannot exceed 30 characters'],
        unique:true
    },
    password:{
      type: String,
      required :[true, 'please enter your password'],
      minlength:[6,'Your password must be longer than 6 characters'],
      select: false
            },
      createdAt:{
          type:Date,
          Default:Date.now()
      }
})

userSchema.pre('save', async function (next){
if(!this.isModified('password')){
  next()
}
this.password= await bcrypt.hash(this.password,10)
return this;
})

const User= mongoose.model('User', userSchema)


  module.exports = User;