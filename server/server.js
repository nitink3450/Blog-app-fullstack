const express = require('express');
const cors = require('cors');
const Home1Data = require('./HomeData');
const Fitness = require('./Fitness');
const tpost = require('./tpost');
const lifestyle = require('./lifestyle');
const LatestArticleData = require('./LatestArticleData');
const HealthyFood = require('./HealthyFood');
const Technology1 = require('./Technology1');
const HollyWood1 = require('./HollyWood1');
const BollyWood1 = require('./BollyWood1');
const app = express();
const port = 7000 || process.env.PORT;//.env used to store password
//global middleware-

app.use(cors());//cross origin resourses sharing policy

app.get('/', (req, res) => {
    res.json(Home1Data).status(200);
    res.json(tpost).status(200);
    res.json(lifestyle).status(200);
    res.json(LatestArticleData).status(200);
    res.end();
});
app.get('/LatestArticleData', (req, res) => {
    res.json(LatestArticleData).status(200);
    res.end();
});
app.get('/tpost', (req, res) => {
    res.json(tpost).status(200);
    res.end();
});
app.get('/singlepage', (req, res) => {
    res.json(Home1Data).status(200);
    res.json(tpost).status(200);
    res.json(lifestyle).status(200);
    res.json(LatestArticleData).status(200);
    res.json(Fitness).status(200);
    res.json(HealthyFood).status(200);
    res.json(Technology1).status(200);
    res.json(HollyWood1).status(200);
    res.json(BollyWood1).status(200);
    res.end();
});
app.get('/lifestyle', (req, res) => {
    res.json(lifestyle).status(200);
    res.end();
});
app.get('/Fitness', (req, res) => {
    res.json(Fitness).status(200);
    res.json(tpost).status(200);
    res.json(lifestyle).status(200);
    res.end();

});
app.get('/HealthyFood', (req, res) => {
    res.json(HealthyFood).status(200);
    res.json(tpost).status(200);
    res.json(lifestyle).status(200);
    res.end();
});
app.get('/Technology', (req, res) => {
    res.json(Technology1).status(200);
    res.json(tpost).status(200);
    res.json(lifestyle).status(200);
    res.end();
});
app.get('/HollyWood', (req, res) => {
    res.json(HollyWood1).status(200);
    res.json(tpost).status(200);
    res.json(lifestyle).status(200);
    res.end();
});
app.get('/BollyWood', (req, res) => {
    res.json(BollyWood1).status(200);
    res.json(tpost).status(200);
    res.json(lifestyle).status(200);
    res.end();
});

app.listen(port, () => {
    console.log(`Connected to port ${port}✅`);
})