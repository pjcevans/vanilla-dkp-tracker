'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PersonSchema = new Schema({
    player: String,
    dkpdata: [{
        date: String,
        dkp: String
    }]
});

module.exports = mongoose.model('Person', PersonSchema);

//var PersonSchema = new Schema({

//
// data: [{
//     date: Date,
//     dkp: Number
// }]
