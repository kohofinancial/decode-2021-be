const express = require('express');
const router = express.Router();

/**
 * @openapi
 * /transactions:
 *   get:
 *     description: Used to get all transactions
 *     responses:
 *       200:
 *         description: Retuns all campaigns
 */
router.get('/transactions', (req, res) => {
    console.log("get users");
});

/**
 * @openapi
 * /transaction/{id}:
 *   get:
 *     description: Used to get transaction
 *     parameters:
 *     responses:
 *       200:
 *         description: Retuns user
 */
 router.get('/transaction:id', (req, res) => {
    console.log("get user");
});

/**
 * @openapi
 * /transaction:
 *   post:
 *     description: create a new user
 *     requestBody:
 *         content: 
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          receiver:
 *                              type: string
 *                          sender:
 *                              type: string
 *                          amount:
 *                              type: number
 *                          type:
 *                              type: string
 *                      
 *     responses:
 *       200:
 *         description: Creates new user
 */
 router.post('/transaction', (req, res) => {
    console.log("create user");
});

module.exports = router;