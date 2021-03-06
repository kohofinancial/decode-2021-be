const express = require('express');
const router = express.Router();
const { POST, GET,DELETE_CAMPAIGNS } = require('../controllers/campaign.js')

/**
 * @openapi
 * /campaign/{id}:
 *   get:
 *     description: Used to get campaign with given id
 *     parameters:
 *     responses:
 *       200:
 *         description: ok
 *         content: 
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                          goalAmount:
 *                              type: number
 *                          currentAmount:
 *                              type: number
 *                          users:
 *                              type: array
 *                              items:
 *                                  type: string
 */
 router.get('/:id', GET);

/**
 * @openapi
 * /campaign:
 *   post:
 *     description: create a new campaign
 *     requestBody:
 *         content: 
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                          goalAmount:
 *                              type: number
 *                          users:
 *                              type: array
 *                              items:
 *                                  type: string
 *                      
 *     responses:
 *       200:
 *         description: Creats new campaign
 */
router.post('/', POST);

router.delete('/:campaignId', DELETE_CAMPAIGNS);

module.exports = router;
