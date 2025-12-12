const express = require('express');
const { postContact } = require('../Controller/contactController');

const router = express.Router();

router.post('/feedback', postContact);


module.exports = router;