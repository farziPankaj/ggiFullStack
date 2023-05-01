/**
 * used only for defining schema
 * aka a structure based on which data will be saved in collection
 * otherwise dirty and unneccesary data can go inside database
 */
const mongoose = require('mongoose');

const ggischema = new mongoose.Schema({
    name:  {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 20,
        trim: true
    },
    batch:  {
        type: String,
        enum: ['1', '2', '3', '4'],
        required: true,
        trim: true
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other', 'Male', 'Female', 'Other'],
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    mobileNumber: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 13,
        trim: true
    },
    enrollmentDate: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['active', 'inactive', 'Active', 'Inactive'],
        required: true
    }
});

// module.exports = mongoose.model('ggidata', ggischema);
module.exports = ggischema;