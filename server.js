const express = require('express');
const mongoose = require('mongoose');
const Movie = require('./models/movie');
const movieRoutes = require('./routes/movie-routes');

const PORT = 3000;
const URL =
  'mongodb+srv://Yevhenii:s3162014693s@cluster0.nssdvpk.mongodb.net/moviebox?retryWrites=true&w=majority';

const app = express();
app.use(express.json());
app.use(movieRoutes);

mongoose
  .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(`DB connection error ${err}`));

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`Listening port ${PORT}`);
});
