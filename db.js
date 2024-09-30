const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('polling_app', 'username', 'password', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = sequelize;
