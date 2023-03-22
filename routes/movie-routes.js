const express = require('express');

const {
  getMovies,
  getMovie,
  deleteMovie,
  addMovie,
  updateMovie,
} = require('../controllers/movie-controller');

const router = express.Router();

//!Sort item
router.get('/movies', getMovies);

//!Getting one item by id
router.get('/movies/:id', getMovie);

//!Delete one item
router.delete('/movies/:id', deleteMovie);

//!Add one item
router.post('/movies', addMovie);

//!Update one element
router.patch('/movies/:id', updateMovie);

module.exports = router;
