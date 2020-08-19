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

 app.get('/', async(req, res) => {
  res.render("index.html");
});

app.get('/leaflethover', async(req, res) => {
  res.render("leaflet/leafletHover.html");
});

app.get('/leafletclick', async(req, res) => {
  res.render("leaflet/leafletClick.html");
});

app.get('/leafletlabel', async(req, res) => {
  res.render("leaflet/leafletLabel.html");
});

app.get('/mapboxhover', async(req, res) => {
  res.render('mapbox/mapboxHover.html');
});

app.get('/mapboxclick', async(req, res) => {
  res.render('mapbox/mapboxClick.html');
});

app.get('/mapboxline', async(req, res) => {
  res.render("mapbox/mapboxLine.html");
});

app.get('/mapboxlabel', async(req, res) => {
  res.render("mapbox/mapboxLabel.html");
});

app.get('/openlayers', async(req, res) => {
  res.render("openlayers/openlayers.html");
});

app.get('/d3', async(req, res) => {
  res.render("d3/d3.html");
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
