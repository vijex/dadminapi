var mongoose = require('mongoose');
var secrets = require('./secrets');

module.exports = {
    connection : mongoose.createConnection(secrets.db)
};
