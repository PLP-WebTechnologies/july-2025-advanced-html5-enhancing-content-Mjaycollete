const express = require('express');
const mongoose = require('mongoose');
const bugsRouter = require('./routes/bugs');
const errorHandler = require('./middleware/errorHandler');

const app = express();
app.use(express.json());

// Connect to DB (use a real URI in .env)
if (process.env.MONGO_URI) {
  mongoose.connect(process.env.MONGO_URI);
}

app.use('/api/bugs', bugsRouter);

// Error middleware
app.use(errorHandler);

module.exports = app;
