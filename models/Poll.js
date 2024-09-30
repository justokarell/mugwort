const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const User = require('./User');

const Poll = sequelize.define('Poll', {
    question: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

Poll.belongsTo(User, { foreignKey: 'userId' });
module.exports = Poll;
