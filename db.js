const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('polling_app', 'username', 'password', {
//     host: 'localhost',
//     dialect: 'postgres'
// });

// module.exports = sequelize;

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    logging: false,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});

module.exports = sequelize;

