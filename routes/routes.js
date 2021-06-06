// Import dependencies
const express = require('express');
const router = express.Router();
const home = require('./../controllers/home');
const contacts = require('./../controllers/contacts');

// Setup Routes and bind them to the relevant controller
router.get('/', home.index);
router.get('/contacts', contacts.index);
router.get('/contacts/view', contacts.view);
router.get('/contacts/create', contacts.create);
router.post('/contacts/store', contacts.store);

module.exports = router;