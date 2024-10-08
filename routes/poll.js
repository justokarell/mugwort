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



router.get('/:pollId', async (req, res) => {
    const { pollId } = req.params;

    try {
        const poll = await Poll.findByPk(pollId, {
            include: [Option]
        });
        res.render('poll', { poll });
    } catch (err) {
        res.status(500).json({ message: 'Error fetching poll', error: err });
    }
});

router.get('/user/:userId/history', async (req, res) => {
    const { userId } = req.params;

    try {
        const polls = await Poll.findAll({ where: { userId }, include: [Option] });
        res.render('history', { polls });
    } catch (err) {
        res.status(500).json({ message: 'Error fetching history', error: err });
    }
});



