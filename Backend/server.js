require("dotenv").config();
const cors = require("cors");
const path = require("path");
const express = require("express");
const connectDB = require("./config/db.js");
const authRoutes = require("./routes/authRoutes.js");

const app = express();
app.use(
  cors({
    // origin: "http://localhost:5173",
    // methods: ["GET", "POST", "PUT", "DELETE"],
    // credentials: true,
    // allowHeaders: ["Content-Type", "Authorization"],
  }),
);
app.use(express.json());

connectDB();

app.use("/api/v1/auth", authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
