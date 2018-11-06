const express = require('express');
const app = express();
const joi = require('joi');
const bodyParser = require('body-parser');
const path = require('path');

const PORT = process.env.PORT || 3000;

app.set('views', './public')
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:true}))

let cars = [
    {mark: 'Mercedes', model: 'C230', VIN: 83457324, }
];
let persons = [  
    {name: 'Vakhtang', lastName: "Nodadze", ID: 010010, }
];


app.get('/', (req, res) =>{
    res.render('index', {});
})

app.post('/personBase', (req, res)=> {
    res.render('index', {});
    let personObj = {
        name: req.body.name,
        lastName: req.body.lastName,
        ID: req.body.ID,
        date: req.body.date
    }
    persons.push(personObj);
    // console.log(req.body);
    console.log(persons);
})
app.post('/carBase', (req, res)=> {
    res.render('index', {});
    let carObj = {
        mark: req.body.mark,
        model: req.body.model,
        VIN: req.body.VIN,
        govNumber: req.body.govNumber,
        color: req.body.color
    }
    cars.push(carObj);
})

app.get('/personBase', (req, res) => {
    res.render('personBase', {persons});
})

app.get('/addCar', (req, res) => {
    res.render('addCar', {});
})

app.get('/carBase', (req, res) => {
    res.render('carbase', {cars});
})

app.get('/carSearch', (req, res) => {
    res.render('carSearch', {});
})

app.get('/userSearch', (req, res) => {
    res.render('userSearch', {});
})


app.listen(PORT, (req, res) => {
    console.log(`This Server is commencing on port: - ${PORT}`);
});