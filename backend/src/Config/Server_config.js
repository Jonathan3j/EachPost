const sequelize = require('sequelize');

module.exports = new sequelize('teste', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
});
