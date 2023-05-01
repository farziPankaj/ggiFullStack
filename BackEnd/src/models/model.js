/**
 * model is nothing but stating the 
 * collection name that will be used
 * and database name is already mentioned in url of db
 * so database will be used from there
 */
const mongoose = require('mongoose');
const schema = require('./schema');

// const collectionSchema = mongoose.model('ggidata', schema);
// module.exports = collectionSchema;
module.exports = mongoose.model('ggidata', schema)