const express = require("express");
const cors = require("cors");
const smsRoutes = require("./routes/smsRoutes");
const { port } = require("./config/envConfig");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api", smsRoutes);

module.exports = app;
