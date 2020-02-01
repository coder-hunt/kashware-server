const mongoose = require('mongoose')
const Schema = mongoose.Schema
const constants = require('../Utils/modelConstants')

const schema = new Schema({
 author: {type: String},
 pseudonym: {type: String},
 username: {type: String},
 password: {type: String}
},{collection: constants.UserModel, autoIndex: true, timestamps: true});

 mongoose.model(constants.UserModel, schema);
