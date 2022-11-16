const express = require("express");
var cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
// const Pusher = require("pusher");

// Import Routes
const authRoute = require("./routes/auth");
// const postRoute = require("./routes/posts");

dotenv.config();

// Connect to DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
  console.log("Connected to Database !");
});

// Cors
app.use(cors());

// Middleware
app.use(express.json());

// Pusher for Chatting
// const pusher = new Pusher({
//   appId: "1506056",
//   key: "3538faf0d3d4f5b489c3",
//   secret: "cfd5b7b1f5567ff04ab6",
//   cluster: "ap2",
//   useTLS: true,
// });

// pusher.trigger("my-channel", "my-event", {
//   message: "hello world",
// });

// Routes Middleware
app.use("/api/user", authRoute);
// app.use("/api/posts", postRoute);

app.listen(3001, () => console.log("Server up and running"));
