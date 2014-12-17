var express = require('express'),
    spotcrime = require('spotcrime'),
    http = require('http');

var app = express();

app.use(express.static(__dirname + '/'));
app.use(express.static(__dirname + '/../node_modules'));

app.get('/getCrimes', function(req, res){
      var loc = {
        lat: req.query['lat'],
        lon: req.query['lon']
      };
   spotcrime.getCrimes(loc, req.query['radius'], function(err, crimes){
        if(err)
            res.send(err);
        else
            res.send(crimes);
    });
});

app.listen(8000);