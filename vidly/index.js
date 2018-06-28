const Joi = require('joi');
const express = require('express'); // returns a function

const app = express();
app.use(express.json());

const genres = [
  { id: 1, name: 'genre1' },
  { id: 2, name: 'genre2' },
  { id: 3, name: 'genre3' },
];

// validate a genre
function validateGenre(genre) {
  const schema = {
    name: Joi.string().min(3).required(),
  };

  const result = Joi.validate(genre, schema);
  return result;
}

// return all genres
app.get('/api/genres', (request, response) => {
  response.send(genres);
});

// create a new genre
app.post('/api/genres', (request, response) => {
  // validate
  const { error } = validateGenre(request.body);
  if (error) {
    return response.status(400).send(error.details[0].message);
  }

  // return the new genre
  const genre = {
    id: genres.length + 1,
    name: request.body.name,
  };
  genres.push(genre);
  return response.send(genre);
});

// update an exsiting genre
app.put('/api/genres/:id', (request, response) => {
  // make sure the genre exists
  const genre = genres.find(c => c.id === parseInt(request.params.id, 10));
  if (!genre) {
    return response.status(404).send('the genre with the given id was not found');
  }

  // validate
  const { error } = validateGenre(request.body);
  if (error) {
    return response.status(400).send(error.details[0].message);
  }

  // return the updated genre
  genre.name = request.body.name;
  return response.send(genre);
});

// return an existing genre
app.get('/api/genres/:id', (request, response) => {
  // make sure the genre exists
  const genre = genres.find(c => c.id === parseInt(request.params.id, 10));
  if (!genre) {
    return response.status(404).send('the genre with the given id was not found');
  }

  // return the genre
  return response.send(genre);
});

// delete an exsiting genre
app.delete('/api/genres/:id', (request, response) => {
  // make sure the genre exists
  const genre = genres.find(c => c.id === parseInt(request.params.id, 10));
  if (!genre) {
    return response.status(404).send('the genre with the given id was not found');
  }

  // delete the genre
  const index = genres.indexOf(genre);
  genres.splice(index, 1);

  // return the genre
  return response.send(genre);
});

// port
const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`listening on port ${port}...`); });
