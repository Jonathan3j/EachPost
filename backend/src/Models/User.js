const Sequelize = require('sequelize');
const db = require('../config/Server_config');
//--------------------------------------------

const User = db.define('user', {
 nome: {
        type: Sequelize.STRING(220),
    },
    email: {
        type: Sequelize.STRING(220),
    },
}, {
    timestamps: true,
}
);

module.exports = User;