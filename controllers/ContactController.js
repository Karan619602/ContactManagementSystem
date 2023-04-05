const Contacts = require('../models/Contacts')

//Create Contact  => /api/v1/Contact/create  -> Protected Route

const CreateContact = (async (req, res, next) => {
    try {
        const { firstName, LastName, email, PhoneNo } = req.body;
        console.log(req.user);
        const contact = await Contacts.create({
            firstName,
            LastName,
            email,
            PhoneNo,
            UserId: req.user.id
        })

        res.status(201).send({
            contact
        })
    } catch (error) {
        console.log(error);
    }

})

//Get All Contacts  OR Search By firstName, LastName, PhoneNo, email => /api/v1/Get/Contacts  -> Protected Route

const GetContacts = (async (req, res, next) => {
    const { firstName, LastName, email, PhoneNo } = req.query;
    const query = {};
  
    if (firstName) {
      query.firstName = firstName;
    }
  
    if (LastName) {
      query.LastName = LastName;
    }
  
    if (email) {
      query.email = email;
    }
  
    if (PhoneNo) {
      query.phone = PhoneNo;
    }
  
    try {
      const contacts = await Contacts.find(query);
      res.json(contacts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
})

// Update Contacts -> api/v1//Contact/update/:id -> Protected Route
const UpdateContact = (async (req, res, next) => {

    
    const Contact = await Contacts.findById(req.params.id)

const updatecontact = await Contacts.findByIdAndUpdate(req.params.id, req.body,{
    new: true,
     runValidators: true,
    useFindAndModify: false
});

res.status(200).json({
    success:true,
    updatecontact
})

  


})

// Delete Contact -> api/v1//Contact/delete/:id -> Protected Route

const DeleteContact = (async (req, res, next) => {

    const { id } = req.params;

   
        const contact = await Contacts.findByIdAndRemove(id);
        if (!contact) {
            throw new Error(`Contact with ID ${id} not found`);
        }
        res.send(`Contact with ID ${id} deleted successfully`);



})

module.exports = { CreateContact, UpdateContact, DeleteContact, GetContacts }
