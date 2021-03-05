const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');


/**
 * @openapi
 * /charities:
 *   get:
 *     description: Used to get all charities
 *     responses:
 *       200:
 *         description: Returns all chartities
 *     parameters:
 *      - in: query
 *        name: query
 *        schema:
 *          type: string
 *        description: Searching by query
 *      - in: query
 *        name: category
 *        schema:
 *          type: string
 *        description: Searching by category
 *      - in: query
 *        name: city
 *        schema:
 *          type: string
 *        description: Searching by city
 *      - in: query
 *        name: province
 *        schema:
 *          type: string
 *        description: Searching by Province
 *      - in: query
 *        name: offset
 *        schema:
 *          type: string
 *        description: Specify the Offset - pagination
 *      - in: query
 *        name: limit
 *        schema:
 *          type: string
 *        description: Specify the limit of element
 */
router.get('', function(req, res) {
  console.log('get all charities');

  let uri = 'https://www.canadahelps.org/en/search/charities/';

  if (req.query) uri += '?';
  
  for (const key in req.query) uri += `${key}=${req.query[key]}&`
  
  fetch(uri)
  .then(resp => {
      if (resp.ok) return resp.json()
      else res.status(404)
  })
  .then(json => res.json(json))
  .catch(e => console.log(e));
});


/**
 * @openapi
 * /charities/:slug_name:
 *   get:
 *     description: Get charity by slugname
 *     responses:
 *       200:
 *         description: Returns charity with matching slugname
 */
router.get('/:slug_name', (req, res) => {
  console.log('charities get: ' + req.params.slug_name);
  
  var uri = 'https://www.canadahelps.org/api/cache/v1/charities/slugname/' + req.params.slug_name + '?fullCharityDetailsFlag=true';

  fetch(uri)
  .then(resp => {
    if (resp.ok) return resp.json()
    else res.status(404)
  })
  .then(json => res.json(json))
  .catch(e => console.log(e));
});

module.exports = router;
