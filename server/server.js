const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config({ path: __dirname + "/.env" });

const userRoutes = require("./routes/user.js");
const channelRoutes = require("./routes/channel.js");
const videoRoutes = require("./routes/video.js");

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use("/api/v1", userRoutes);
app.use("/api/v1", videoRoutes);
app.use("/api/v1", channelRoutes);

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




 All API END POINTS:-

 1) REGISTER USER
 2) LOGIN USER
 3) EDIT USER
 4) LOGOUT USER
 5) DELETE USER
 6) CREATE CHANNEL
 7) EDIT CHANNEL
 8) DELETE CHANNEL
 9) UPLOAD VIDEO
 10) DELETE VIDEO
 11) LIKE VIDEO
 12) DISLIKE VIDEO
 13) COMMENT VIDEO
 14) VIEW VIDEO       
*/
