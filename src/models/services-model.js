const mongoose = require('mongoose');

const service = mongoose.Schema({
    icon: String,
    title: String,
    description: String,
    linkName: String,
    link: String
})

module.exports = servicesModel = mongoose.model('service', service);
function AddSlider() {
    servicesModel.create([{
        icon: "fa fa-university",
        title: "In this section we will provide interships in our universtiy",
        description: "In this course we will teach quality of interships in our universtiy",
        linkName: "check",
        link: "https://aup.edu.pk"
    
      },
      {
        icon: "fa fa-american-sign-language-interpreting",
        title: "We provide best tricks about instagram",
        description: "In this course we will teach quality of tricks & logics practically",
        linkName: "insta",
        link: "https://instagram.com/itx__abu"
    
      },

    ])
    }
    // AddSlider()
    