const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Poll = require('./Poll');

const Option = sequelize.define('Option', {
    text: {
        type: DataTypes.STRING,
        allowNull: false
    },
    votes: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
});

Option.belongsTo(Poll, { foreignKey: 'pollId' });
module.exports = Option;
