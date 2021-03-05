const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

/**
 * @openapi
 * /categories:
 *   get:
 *     description: Used to get all categories
 *     responses:
 *       200:
 *         description: Returns all categories
 */
router.get('/', (req, res) => {
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