const express = require('express');
const router = express.Router();
var request = require('request');


router.get('/search', function(req, res) {
  request('https://www.canadahelps.org/en/search/charities/', function(err, res, body) {
    res.send(body);
  });
});


module.exports = router;
