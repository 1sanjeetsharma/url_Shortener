
const express = require("express");
const connectMongoDb = require("./connect");
const app = express();
const PORT = 8000;
const dbURL = "mongodb://127.0.0.1:27017/url";
const urlRouter = require("./routes/url");
//connection
connectMongoDb(dbURL)
  .then(() => {
    console.log("mongodbConnected ");
  })
  .catch((err) => console.log("mongo Err,", err));
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", urlRouter);

app.listen(PORT, () => {
  console.log("server started at port:", PORT);
});
