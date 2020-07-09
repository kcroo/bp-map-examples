/*
Author: Kirsten Corrao
Date: 06/08/2020
*/

// set up necessary libraries
const express = require('express');
const bodyParser = require('body-parser');
const fs = require("fs");
const nunjucks = require('nunjucks');

const app = express();
app.use('/public', express.static('public'))
app.use('/ca_state_senate_districts', express.static('ca_state_senate_districts'))
app.use(bodyParser.json());

nunjucks.configure('views', { 
  autoescape: true,
  express: app
 });

 app.get('/leaflet', async(req, res) => {
    res.render("leaflet.html");
  });


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
