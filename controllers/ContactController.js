const { Contacts } = require('../models/index')
const { Op } = require('sequelize');

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
    const query = req.query;

    const searchParams = {
        [Op.or]: [
            { firstName: { [Op.like]: `%${query.firstName}%` } },
            { LastName: { [Op.like]: `%${query.LastName}%` } },
            { email: { [Op.like]: `%${query.email}%` } },
            { PhoneNo: { [Op.like]: `%${query.PhoneNo}%` } },
        ],
    };

    Contacts.findAll({
        where: query ? searchParams : {},
    })
        .then((contacts) => {
            res.json({ contacts });
        })
        .catch((error) => {
            res.status(500).json({ message: error.message });
        });
})

// Update Contacts -> api/v1//Contact/update/:id -> Protected Route
const UpdateContact = (async (req, res, next) => {

    const { firstName, LastName, email, PhoneNo } = req.body;
    const { id } = req.params;

    Contacts.update(
        { firstName, LastName, email, PhoneNo },
        { where: { id } }
    )
        .then(() => {
            res.json({ message: 'Contact updated successfully' });
        })
        .catch((error) => {
            res.status(500).json({ message: error.message });
        });


})

// Delete Contact -> api/v1//Contact/delete/:id -> Protected Route

const DeleteContact = (async (req, res, next) => {

    const { id } = req.params;

    try {
        const contact = await Contacts.findByPk(id);
        if (!contact) {
            throw new Error(`Contact with ID ${id} not found`);
        }
        await contact.destroy();
        res.send(`Contact with ID ${id} deleted successfully`);
    } catch (err) {
        res.send('Error deleting contact:', err);
    }


})

module.exports = { CreateContact, UpdateContact, DeleteContact, GetContacts }
