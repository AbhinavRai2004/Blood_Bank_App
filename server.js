const express = require("express");
const dotenv = require("dotenv");
const colors = require('colors');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require("./config/db");

//dot config

dotenv.config();

//mongodb connection
connectDB()

// Rest Object.
const app = express();

// middlewares.
app.use(express.json());
app.use(cors());
app.use(morgan('dev'))

//Routes.
// 1. test Route 
// app.get("/", (req, res) => {
//   res.status(200).json({
//     message: "welcome To Blood Bank",
//   });
// });

app.use('/api/v1/test',require('./routes/testRoutes'));
app.use('/api/v1/auth',require('./routes/authRoutes'));


//Port

const PORT = process.env.PORT || 8080;

// Listen
app.listen(PORT, () => {
  console.log(`Node Server Running In ${process.env.DEV_MODE}Mode on Port ${process.env.PORT}`.bgBlue.white);
});
