const express = require('express');
const router = express.Router();

/**
 * @openapi
 * /campaigns:
 *   get:
 *     description: Used to get all charity campaigns
 *     responses:
 *       200:
 *         description: Retuns all campaigns
 */
router.get('/campaigns', (req, res) => {
    console.log("get all campaigns");
});

/**
 * @openapi
 * /campaign{id}:
 *   get:
 *     description: Used to get campaign with given id
 *     parameters:
 *     responses:
 *       200:
 *         description: campaign
 */
 router.get('/campaign:id', (req, res) => {
    console.log("get all campaigns");
});

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
router.post('/campaign', (req, res) => {
    console.log("create campaign");
});

module.exports = router;
