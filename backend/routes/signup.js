const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.post('/signup', async (req, res) => {
    const { name, age, gender, phoneNumber, email, password } = req.body;

    try {
        const user = new User({ name, age, gender, phoneNumber, email, password });
        await user.save();
        res.status(201).json({ message: 'Signup successful!' });
    } catch (error) {
        res.status(400).json({ message: 'Error creating account', error });
    }
});

module.exports = router;
