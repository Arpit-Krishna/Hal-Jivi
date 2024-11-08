const express = require('express');
const mongoose = require('./config/db');
const signupRoute = require('./routes/signup');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use('/api', signupRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
