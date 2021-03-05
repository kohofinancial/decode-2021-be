const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');


router.get('/', (res, req, next) => {
  res.send("<div>hello from charities :)</div>");
});


// GET /charities (filters: name, category, location(city, province))

// /charities/__

router.get('/search', function(req, res) {
  console.log('get all charities');

  let uri = 'https://www.canadahelps.org/en/search/charities/';

  if (req.query) uri += '?';
  
  for (const key in req.query) uri += `${key}=${req.query[key]}&`

  fetch(uri)
  .then(body => {
    res.send(body);
  })
  .catch(e => console.log(e));
});

// GET /charity/:charity_id   (drill down on specific charity)

router.get('/:charity_key', (req, res) => {
  var uri = 'https://www.canadahelps.org/api/cache/v1/charities/slugname/' ;//+ req.params.charity_key + '?fullCharityDetailsFlag=true';

  fetch(uri)
  .then(body => {
    res.send(body);
  })
  .catch(e => console.log(e));
});


// GET /charities/categories (get a list of categories. Need filters?)
router.get('/categories', (req, res) => {
  console.log('get categories');

  // GET {key}/search/categories/getcategories

  categories = [
    'animals', 'arts-culture', 'education',
    'environment', 'health', 'indigenous-peoples',
    'international', 'public-benefit', 'religion',
    'social-services'
  ]
  res.json({ 
    result: categories
  });
});

module.exports = router;
