const mongoose = require('mongoose');

const contactBox = mongoose.Schema({
    email: String,
    phone: Number,
    message: String,
})

module.exports = contactBoxModel = mongoose.model('contactBox', contactBox);
function AddSlider() {
    contactBoxModel.create({
        email: "abc@gmail.com",
        phone: "03848585",
        message: "In this course we will teach quality of interships in our universtiy",
      }
    )
    }
    // AddSlider() 
    