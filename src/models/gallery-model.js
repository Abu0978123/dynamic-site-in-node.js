const mongoose = require('mongoose');

const gallery = mongoose.Schema({
    img: String,
    description: String,
})

module.exports = gallerysModel = mongoose.model('gallery', gallery);
function AddSlider() {
    gallerysModel.create([{
        img: "/static/images/coding1.jpg",
        description: "Its my first Dedign",
      },
      {
        img: "/static/images/coding2.webp",
        description: "Its my second Dedign",
      },
      {
        img: "/static/images/coding3.jpeg",
        description: "Its my third Dedign",
      },
      {
        img: "/static/images/coding4.webp",
        description: "Its my fourth Dedign",
      },
      {
        img: "/static/images/coding5.jpg",
        description: "Its my fifth Dedign",
      },
      {
        img: "/static/images/coding6.jpg",
        description: "Its my sixth Dedign",
      },

    ])
    }
    // AddSlider()
    