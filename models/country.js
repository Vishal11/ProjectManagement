const mongoose = require('mongoose');
const config = require('../config/database');

const CountrySchema = new mongoose.Schema({
    name:String,
    code:String
});

const Country = module.exports = mongoose.model('Country',CountrySchema,'countrys');