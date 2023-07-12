const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config({ path: __dirname + "/.env" });

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());

mongoose
  .connect("mongodb://localhost/youtube-clone")
  .then(() => {
    console.log("Database connected");
  })
  .catch((e) => {
    console.log(e.message);
  });

app.listen(process.env.PORT, () => {
  console.log(`Server started on localhost:${process.env.PORT}`);
});
/*

server(folder)
    server.js(file)
    .env (file)
    middlewares (folder)
        isAuhtenticated.js (file)
    models (folder)
        user.js (file)
        channel.js (file)
        video.js   (file)
    routes (folder)
        user.js (file)
        channel.js (file)
        video.js   (file)   
    controllers (folder)
        user.js (file)
        channel.js (file)
        video.js   (file)  

*/
