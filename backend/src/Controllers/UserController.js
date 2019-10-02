const User = require('../models/User');

module.exports = {
    async store(req, res){
        res.json({ ok: true })
    }
};

// store, index, show, update e delete