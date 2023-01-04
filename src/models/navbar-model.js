const mongoose = require("mongoose");
const Detial = mongoose.Schema({
    brandName: String,
    brandIconUrl: String,
    links: [
      {
        label: String,
        url: String,
      },
    ],
  });
 module.exports = NavbarModel = mongoose.model("Detial", Detial);
  function ADDDATA() {
    NavbarModel.create({
      //     brandName: "Abu Bakar",
      //     brandIconUrl:"https://getbootstrap.com/docs/4.0/getting-started/download/",
      //     links:[
      //       {
      //         label: "Home",
      //         url: "/home"
      //       },
      //       {
      //         label: "Gallery",
      //         url: "/gallery"
      //       },
      //       {
      //         label: "Services",
      //         url: "/services"
      //       },
      //       {
      //         label: "About",
      //         url: "/about"
      //       },
      //       {
      //         label: "Contact Us",
      //         url: "/contact-us"
      //       },
      //     ]
    });
  }
  // ADDDATA()