const express = require('express');
const router = express.Router();
const { POST, GET, GET_CAMPAIGNS } = require('../controllers/user.js')

/**
 * @openapi
 * /user/{id}:
 *   get:
 *     description: Used to get userID
 *     parameters:
 *     responses:
 *       200:
 *         description: Returns user
 */
 router.get('/:userId', GET);

/**
 * @openapi
 * /user:
 *   post:
 *     description: create a new user
 *     requestBody:
 *         content: 
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                          balance:
 *                              type: number
 *                          roudUp:
 *                              type: number
 *                      
 *     responses:
 *       200:
 *         description: Creates new user
 */
 router.post('/', POST);


 /**
 * @openapi
 * /user/:userId/campaigns:
 *   get:
 *     description: getting all campaings for a specific user             
 *     responses:
 *       200:
 *         description: return list of campaings
 */
 router.get('/:userId/campaigns', GET_CAMPAIGNS);

module.exports = router;