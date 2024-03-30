const express = require("express");
const fs = require('fs');

const bodyParser = require("body-parser");
const path = require("path");

process.env.NODE_ENV !== "production" && require("dotenv").config();

const router = require("./router")

const port = process.env.PORT || 5000;

const morgan = require("morgan");

const app = express();

app
  .set("view engine", "ejs")
  .set("views", path.join(__dirname, "resources/views"))
  .use(bodyParser.json({ limit: "50mb" }))
  .use(bodyParser.urlencoded({ extended: true }))
  .use(express.static(path.join(__dirname, "public")))
  .use(morgan("combined", { stream: fs.createWriteStream("/var/log/crowdin-sample-1/access.log", { flags: "a" }) }))
  .use(router);

app.listen(port, () => console.log(`Listening on ${ port }`))