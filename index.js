const express = require('express');
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const notesRoutes = require("./routes/noteRoutes");
const swaggerDocs = require("./swagger");
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Swagger Docs
swaggerDocs(app);

// Routes
app.use("/api/", authRoutes);
app.use("/api/", notesRoutes);


// Connect to MongoDB
connectDB();

// Start the server

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});