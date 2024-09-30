const sequelize = require('./db');
const User = require('./models/User');
const Poll = require('./models/Poll');
const Option = require('./models/Option');

sequelize.sync({ force: true }).then(() => {
    console.log('Database synced');
}).catch(err => {
    console.error('Error syncing database', err);
});

require('dotenv').config();
