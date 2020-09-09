//import express, Api routes, html routes
const express = require("express");
const apiRoutes = require("./routes/api-routes");
const htmlRoutes = require("./routes/html-routes");
//app calls express, PORT connects server port
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT);
//mic drop
