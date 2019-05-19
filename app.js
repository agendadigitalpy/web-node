const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const volleyball = require('volleyball');
const mongoose = require('mongoose');

// Load Models
require('./models/Proposal');

// Load Routes
const index = require('./routes/index');

// Load Keys
const keys = require('./config');

//Handlebars Helpers
const {
  truncate,
  formatDate,
  categoryStr
} = require('./helpers/hbs');

// Map global promises
mongoose.Promise = global.Promise;
// Mongoose Connect
mongoose.connect(keys.mongoURI, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const app = express();

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// log request
app.use(volleyball)

// Handlebars Middleware
app.engine('handlebars', exphbs({
  helpers: {
    truncate: truncate,
    formatDate: formatDate,
    categoryStr: categoryStr
  },
  defaultLayout:'main'
}));

app.set('view engine', 'handlebars');

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Use Routes
app.use('/', index);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
});