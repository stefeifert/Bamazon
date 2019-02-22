// Node Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Requiring our models for syncing
var db = require('./models');

// Set up Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Link in html and api routes
var apiRoutes = require('/routes/apiRoutes.js');
var htmlRoutes = require('/routes/htmlRoutes.js');

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Server Routing Map 
apiRoutes(routes); // API route - Must be listed first due to the HTML default catch all "use" route
htmlRoutes(routes); // HTML route 

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
  });
});
