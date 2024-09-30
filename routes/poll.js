const express = require('express');
const router = express.Router();
const Poll = require('../models/Poll');
const Option = require('../models/Option');
const User = require('../models/User');

router.post('/create', async (req, res) => {
    const { userId, question, options } = req.body;

    try {
        const poll = await Poll.create({ question, userId });

        // Create options
        options.forEach(async (option) => {
            await Option.create({ text: option, pollId: poll.id });
        });

        res.status(201).json({ message: 'Poll created successfully', poll });
    } catch (err) {
        res.status(500).json({ message: 'Error creating poll', error: err });
    }
});

module.exports = router;
