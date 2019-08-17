
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
require('./config/config');



app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.json('hello world');
});
app.get('/usuario', function(req, res) {
    res.json('get usuario');
  });
app.post('/usuario', function(req, res) {
  let body = req.body;

    if (body.nombre === undefined){
      res.status(400).json({
        ok: false,
        'mesaje': 'el nombre es necesaro'
      });
    }else{
      res.json({
        body
      });
    }
  });
app.put('/usuario/:id', function(req, res) {
    let id = req.params.id;
    res.json({
        id
    });
  });
app.delete('/usuario', function(req, res) {
    res.json('delete usuario');
  });

app.listen(process.env.PORT ,()=>{
    console.log('Escuchado puerto: ',process.env.PORT);
})