const express = require('express');
const router = express.Router();

/**
 * @openapi
 * /campaign:
 *   get:
 *     description: Used to get all charity campaigns
 *     responses:
 *       200:
 *         description: Retuns all campaigns
 */
router.get('/', (req, res) => {
    console.log("get all campaigns");
    res.send("<div>campaigns</div>");
});

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
 router.get('/:id', (req, res) => {
    console.log("get campaign: " + req.params.id);
    res.send(`<p>campaign: ${req.params.id}</p>`)
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
router.post('/', (req, res) => {
    console.log("create campaign");
});

module.exports = router;
