const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST /api/contact - Save form submission and send an email
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    // Save the contact form submission to the database
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    // Respond to the client
    res.status(201).json({ message: 'Message received. Thank you!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});

module.exports = router;
