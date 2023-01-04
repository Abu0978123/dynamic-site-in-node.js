const mongoose = require("mongoose");
const slider = mongoose.Schema({
    title: String,
    subTitle: String,
    imageUrl: String,
    class: String
  });
  module.exports = sliderModel = mongoose.model("slider", slider);
  function AddSlider() {
  //   sliderModel.create([
  //     {
  //     title: "The First Slider",
  //     subTitle: "hello dear I am from first slider",
  //     imageUrl: "/static/images/sl3.webp",
  //     class: ""
  
  //   },
  //   {
  //     title: "The Second Slider",
  //     subTitle: "hello dear I am from Second slider",
  //     imageUrl:
  //       "/static/images/sl2.webp",
  //       class: ""
  //   },
  //   {
  //     title: "The third Slider",
  //     subTitle: "hello dear I am from third slider",
  //     imageUrl:
  //       "/static/images/sl1.jpg",
  //       class: "active"
  //   },
  
  // ]);
  }
  // AddSlider()
  