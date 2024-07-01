const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

//connect the database
connectDB();

const app = express();
 
app.use(express.json());

app.use(cors());//to fix the cors error

//define the routes 
app.use('/api/students', require('./routes/studentRoutes'));

const PORT = process.env.PORT || 6001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));