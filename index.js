require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./Routes/index");
const Models = require("./Models/index");
const rateLimit = require("express-rate-limit");

// //Insialisasi ke Database
// Models.sequelizeInstance
//   .sync({ force: false, alter: true })
//   .then(async () => {
//     console.log("Synced db.");
//   })
//   .catch((err) => {
//     console.log("Failed to sync db: " + err.message);
//   });

//CHECK SERVER
app.get("/", (req, res) => {
  res.send("API Running");
});

// rate limiting
const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 menit
    max: 3 
});


app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "10mb" }));
app.use(limiter);

app.use(router);

app.listen(process.env.PORT || 5004, () => {
  console.log("Server running at port 5004");
});
