import express from 'express';
import fetch from 'node-fetch';
const planets = (await import('npm-solarsystem')).default;
const app = express();
app.set("view engine", "ejs"); //templating engine reuiqred

app.use(express.static("public")); //folder for static file


//home route
app.get('/', async(req, res) => {
    let apiKey = "eax8HcflFkzNM5cM8VpsaqFWHBqf5U5Chge6j_bnVFI";
    let url =
    `https://api.unsplash.com/photos/random/?client_id=${apiKey}&featured=true&query=solar-system`;
    let response = await fetch(url);
    let data = await response.json();
    let randomImage = data.urls.full;
    res.render("index",{"image":randomImage, activeLink: 'home'})
});

//earth route
app.get('/earth', (req, res) => {
    let planetEarth = planets.getEarth();
    console.log(planetEarth);
    res.render('earth', {planetEarth, activeLink: 'earth'});
});

//mars route
app.get('/mars', (req, res) => {
    let planetMars = planets.getMars();
    console.log(planetMars);
    res.render('mars', {planetMars, activeLink: 'mars'});
});

//mercury route
app.get('/mercury', (req, res) => {
    let planetMercury = planets.getMercury();
    console.log(planetMercury);
    res.render('mercury', {planetMercury, activeLink: 'mercury'});
});

//venus route
app.get('/venus', (req, res) => {
    let planetVenus = planets.getVenus();
    console.log(planetVenus);
    res.render('venus', {planetVenus, activeLink: 'venus'});
});

//jupiter route
app.get('/jupiter', (req, res) => {
    let planetJupiter = planets.getJupiter();
    console.log(planetJupiter);
    res.render('jupiter', {planetJupiter, activeLink: 'jupiter'});
});

//saturn route
app.get('/saturn', (req, res) => {
    let planetSaturn = planets.getSaturn();
    console.log(planetSaturn);
    res.render('saturn', {planetSaturn, activeLink: 'saturn'});
});

//uranus route
app.get('/uranus', (req, res) => {
    let planetUranus = planets.getUranus();
    console.log(planetUranus);
    res.render('uranus', {planetUranus, activeLink: 'uranus'});
});

//neptune route
app.get('/neptune', (req, res) => {
    let planetNeptune = planets.getNeptune();
    console.log(planetNeptune);
    res.render('neptune', {planetNeptune, activeLink: 'neptune'});
});

//pluto route
app.get('/pluto', (req, res) => {
    let planetPluto = planets.getPluto();
    console.log(planetPluto);
    res.render('pluto', {planetPluto, activeLink: 'pluto'});
});

//
//sunroute
app.get('/sun', (req, res) => {
    let planetSun = planets.getSun();
    console.log(planetSun);
    res.render('sun', {planetSun, activeLink: 'sun'});
});

//nasapodroute
app.get('/nasapod', async(req, res) => {
    let url =
    `https://api.nasa.gov/planetary/apod?api_key=9mUzIkhlZCZaOoMfspg7jMmwZCZ4LiRHtkgkambD&date=2025-11-23`;
    let response = await fetch(url);
    let data = await response.json();
    let nasapod = data;
    res.render("nasapod",{nasapod, activeLink: 'nasapod'})
});

app.listen(3000, () => {
    console.log('server started');
});