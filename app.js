var fs = require('fs');
var http = require('http');
var express = require('express');
var app = express();
app.use(express.json());

let bd = [];


// получение GET запроса на главную страницу
app.get('/bd', function (req, res) {
    res.send(JSON.stringify(bd));
});

app.get('/hack', function (req, res) {
    fs.readFile("static/html/index.html", 'utf8', function(err, data) {
        if (err){
            console.log('Could not find or open file for reading\n');
            res.send("");
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        }
    })
});

app.get('/', function (req, res) {
    fs.readFile("static/html/hack.html", 'utf8', function(err, data) {
        if (err){
            console.log('Could not find or open file for reading\n');
            res.send("");
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        }
    })
});

app.get('/static/img/image.jpg', function (req, res) {
    fs.readFile("static/img/image.jpg", function(err, data) {
        if (err){
            console.log('Could not find or open file for reading\n');
            res.send("");
        } else {
            res.writeHead(200, {'Content-Type': 'image/jpeg'});
            res.end(data);
        }
    })
});

// получение POST запроса на главную страницу
app.post('/', function (req, res) {
    bd.push({text:req.body.text, like:0});
    res.send(JSON.stringify(bd));
});

// получение PUT запроса по адресу /user
app.put('/', function (req, res) {
    bd[req.body.id].like+=1;
    res.send(JSON.stringify(bd));
});

// получение DELETE запроса по адресу /user
app.delete('/', function (req, res) {
    bd.splice(req.query.id,1);
    res.send(JSON.stringify(bd));
});

app.options("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.send(200);
});


var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port)
});
