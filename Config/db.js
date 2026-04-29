 const mongoose = require('mongoose');

// use env variable (make sure you added dotenv in main file)
const connection = mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("DB connection done successfully...");
  })
  .catch((err) => {
    console.log("DB connection failed..", err.message);
  });

// export
module.exports = connection;