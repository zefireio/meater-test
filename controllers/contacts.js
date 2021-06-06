// Import dependencies
const ContactsModel = require('./../models/contacts');
const validator = require('./../services/validator');

// List Contacts
var index = (req, res, next) => {
  res.render('contacts', {
    title: 'Contacts - ' + process.env.APP_NAME,
    brand: process.env.APP_NAME,
    contacts: ContactsModel.all('desc')
  })
};

// Find a contact by ID
var view = (req, res, next) => {
  var rules = {
    "id": "number"
  };
  var validationMessages = validator.validate(rules, req.query);
  if (validationMessages.valid === true) {
    res.status(200).json({
      body: ContactsModel.find(req.query.id)
    });
  } else {
    res.status(400).json({
        body: validationMessages
    });
  }
};

// Render's the contact form
var create = (req, res, next) => {
  res.render('contact-form', {
    title: 'Enquiry - ' + process.env.APP_NAME,
    brand: process.env.APP_NAME    
  })
};

// Store a new contact
var store = (req, res, next) => {
  // Check if honeypot fake input has been populated in which case we consider the submission invalid
  if (req.body.hasOwnProperty('phone') === true && req.body.phone != '') {
    res.status(400).json({
      body: 'We do not like spammers, moving on.'
    });
  } else {
    // Validate inputs
    var rules = {
      "name": "string",
      "email": "email",
      "message": "string",
      "code": "string"
    };
    var validationMessages = validator.validate(rules, req.body);
    // If validation is successful then try to insert contact.
    // Otherwise we render the form error page.
    if (validationMessages.valid === true) {
      var name = req.body.name;
      var email = req.body.email;
      var message = req.body.message;
      var newsletter = req.body.newsletter;
      var created_at = Date.now();
      var insert = ContactsModel.insert(name, email, message, newsletter, created_at);
      // If insert was successfull, then should have the last inserted id
      // and we render the success page.
      // Otherwise we render the form error page.
      if (insert.hasOwnProperty('lastInsertedId') === true) {
        res.render('contact-success', {
          title: 'Enquiry - ' + process.env.APP_NAME,
          brand: process.env.APP_NAME    
        });
      } else {
        res.render('contact-error', {
          title: 'Enquiry - ' + process.env.APP_NAME,
          brand: process.env.APP_NAME
        });
      }
    } else {    
      res.render('contact-error', {
        title: 'Enquiry - ' + process.env.APP_NAME,
        brand: process.env.APP_NAME
      });
    }
  }  
};

module.exports = {
    index,
    view,
    create,
    store   
};