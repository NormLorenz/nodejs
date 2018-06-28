const Joi = require('joi');
const express = require('express'); // returns a function

const app = express();
app.use(express.json());

const courses = [
  { id: 1, name: 'course1' },
  { id: 2, name: 'course2' },
  { id: 3, name: 'course3' },
];

// validate a course
function validateCourse(course) {
  const schema = {
    name: Joi.string().min(3).required(),
  };

  const result = Joi.validate(course, schema);
  return result;
}

// return the text 'hello world'
app.get('/', (request, response) => {
  response.send('hello world');
});

// return all courses
app.get('/api/courses', (request, response) => {
  response.send(courses);
});

// create a new course
app.post('/api/courses', (request, response) => {
  // validate
  const { error } = validateCourse(request.body);
  if (error) {
    return response.status(400).send(error.details[0].message);
  }

  // return the new course
  const course = {
    id: courses.length + 1,
    name: request.body.name,
  };
  courses.push(course);
  return response.send(course);
});

// update an exsiting course
app.put('/api/courses/:id', (request, response) => {
  // make sure the course exists
  const course = courses.find(c => c.id === parseInt(request.params.id, 10));
  if (!course) {
    return response.status(404).send('the course with the given id was not found');
  }

  // validate
  const { error } = validateCourse(request.body);
  if (error) {
    return response.status(400).send(error.details[0].message);
  }

  // return the updated course
  course.name = request.body.name;
  return response.send(course);
});

// return an existing course
app.get('/api/courses/:id', (request, response) => {
  // make sure the course exists
  const course = courses.find(c => c.id === parseInt(request.params.id, 10));
  if (!course) {
    return response.status(404).send('the course with the given id was not found');
  }

  // return the course
  return response.send(course);
});

// delete an exsiting course
app.delete('/api/courses/:id', (request, response) => {
  // make sure the course exists
  const course = courses.find(c => c.id === parseInt(request.params.id, 10));
  if (!course) {
    return response.status(404).send('the course with the given id was not found');
  }

  // delete the course
  const index = courses.indexOf(course);
  courses.splice(index, 1);

  // return the course
  return response.send(course);
});

// port
const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`listening on port ${port}...`); });
