const express = require("express");
var bodyParser = require('body-parser');
// const cors = require('cors')
const mongoose = require("mongoose");
const hbs = require("hbs");
// here connection of DB
const conn = require("./db-connec/conn");
conn(); 
//   this is the model and schema of Navbar
const NavbarModel = require("./models/navbar-model");
// this is the Slider of the schema and model
const sliderModel = require("./models/slider-model");
// this is the services of the schema and model
const servicesModel  = require('./models/services-model')
// this is contactBoxModel schema and model
const contactBoxModel = require('./models/contact-model')
// this is gallery model
const gallerysModel  = require('./models/gallery-model')
// our app is running on port 4000
const PORT = process.env.PORT || 4000;
// some configration of Express and Node
const app = express();
app.use(express.json());
// app.use(bodyParser.json({extended: true}));
app.use(express.urlencoded({extended: true}));
// app.use(cors());

// set static files  as middleware
app.use("/static", express.static("public"));

// set dynamic files like hbs
app.set("view engine", "hbs");
app.set("views", "views");

// to register Partials
hbs.registerPartials("views/partials");

app.get("/", async (req, res) => {
  // this objext for navbar detials
  const Detial = await NavbarModel.findOne({ _id: "63b28d010ed337078f54ba51" });

  // this objext for slider detials
  const Detial2 = await sliderModel.find();
  const Detial3 = await servicesModel.find();
  // res.send(data);
  // console.log(Detial2);
  res.render("index", {
    Detial: Detial, //its for navbar detial
    Detial2: Detial2, //its for slider detial
    Detial3: Detial3, //its for services detial
  });
});

app.get("/gallery", async (req, res) => {
  const Detial = await NavbarModel.findOne({ _id: "63b28d010ed337078f54ba51" });
  const Gallery = await gallerysModel.find();
  res.render("gallery", {
    Detial: Detial,
    Gallery: Gallery
  });
});
// here we will post the contact section data in our DB
app.post('/process-contact-form', async(req, res)=>{
  const user =await contactBoxModel.create(req.body);

  try {
    console.log(user)
    res.redirect('/');
    // alert("your data add")
  } catch (error) {
    console.log(error)
    res.redirect('/');
  }
})

app.listen(PORT, () => {
  console.log(`your app is running in ${PORT}`);
});
