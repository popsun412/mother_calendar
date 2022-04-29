const express = require('express');
const app = express();
const cors = require('cors');

const sequelize = require('./models').sequelize;
sequelize.sync();

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true
}

app.use(cors(corsOptions));
app.use(express.json());

const { HomeMain, HomeItem, HomePlace, HomeTheme, CategoryPlan, Confirm, Sample1, Feed, Experience, Parents, Etc, Bookmark, Place, Sequelize: { Op }, CategoryItem, MapList} = require('./models');
const item = require('./models/home/item');
sequelize.query('SET NAMES utf8;');

app.get('/', (req, res) => {
    res.send('Server Response Success');
})

app.post('/add/data', (req, res) => {
    console.log(req.body);

    Sample1.create({
        category: req.body.category,
        step: req.body.step,
        korean: req.body.korean,
        science: req.body.science
    })
    .then(result => {
        res.send(result)
    })
    .catch(err => {
        console.log(err)
        throw err;
    })
})

app.get('/home/main', (req, res) => {
    HomeMain.findAll()
        .then( result => { res.send(result) })
        .catch( err => { throw err })
})

app.get('/home/item', (req, res) => {
    HomeItem.findAll()
        .then( result => { res.send(result) })
        .catch( err => { throw err })
})

app.get('/home/place', (req, res) => {
    HomePlace.findAll()
        .then( result => { res.send(result) })
        .catch( err => { throw err })
})

app.get('/home/theme', (req, res) => {
    HomeTheme.findAll()
        .then( result => { res.send(result) })
        .catch( err => { throw err })
})

app.get('/category/plan', (req, res) => {
    CategoryPlan.findAll({
        where: { category : req.query.category }
    })
    .then( result => { res.send(result) })
    .catch( err => {throw err})
})

app.get('/category/item', (req, res) => {
    CategoryItem.findAll({
        where: { category : req.query.category }
    })
    .then( result => { res.send(result) })
    .catch( err => {throw err})
})

app.get('/confirm/confirm', (req, res) => {
    Confirm.findAll({
        where: { date: '20220402' }
    })
    .then( result => { res.send(result) })
    .catch( err => {throw err})
})

app.get('/feed/data', (req, res) => {
    Feed.findAll()
        .then( result => { res.send(result) } )
        .catch( err => { throw err })
})

app.get('/experience/data', (req, res) => {
    Experience.findAll()
        .then( result => { res.send(result)} )
        .catch( err => { throw err })
})

app.get('/parents/data', (req, res) => {
    const order = req.query.order;
    console.log('order : ', order);

    Parents.findAll({
        order: [
            ['title', order]
        ]
    })
    .then( result => { res.send(result) })
    .catch( err => { throw err })
})

app.get('/etc/data', (req, res) => {
    const order = req.query.order;
    console.log('order : ', order);

    Etc.findAll({
        order: [
            ['title', order]
        ]
    })
    .then( result => { res.send(result) })
    .catch( err => { throw err })
})

app.post('/common/bookmark', (req, res) => {
    console.log(req.query);
    Bookmark.create({
        category: req.query.category,
        itemid: req.query.itemid,
        userid: req.query.userid,
        title: req.query.title,
    })
    .then(result => {
        res.send(result)
    })
    .catch(err => {
        console.log(err)
        throw err;
    })
})

app.get('/result/data', (req, res) => {
    console.log('--- /result/data ---');
    console.log(req.query);
    Place.findAll({
        where: {
            title: { [Op.like]: `%${req.query.title}%` },
        },
    })
        .then( result => { res.send(result) })
        .catch( err => { throw err })
})

app.get('/map/list', (req, res) => {
    console.log(req.query);
    MapList.findAll({
        where: {

        }
    })
        .then( result => { res.send(result) })
        .catch( err => {  throw err})
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}`);
})