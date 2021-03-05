const express = require('express');
const router = express.Router();
const { POST, GET } = require('../controllers/transaction.js')

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
router.get('/:id', GET);

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
router.post('/', POST);

module.exports = router;
