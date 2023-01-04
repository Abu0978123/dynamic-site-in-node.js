const mongoose = require("mongoose");
const URL = "mongodb://127.0.0.1:27017/node_project";
module.exports =  async function DB_conn() {
    await mongoose.connect(URL).then(() => {
      console.log("connected successfully");
    });
  }
