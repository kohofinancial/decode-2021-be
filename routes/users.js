const express = require('express');
const router = express.Router();

/**
 * @openapi
 * /users:
 *   get:
 *     description: Used to get all users
 *     responses:
 *       200:
 *         description: Retuns all campaigns
 */
router.get('/user', (req, res) => {
    console.log("get users");
});

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
 router.get('/user:id', (req, res) => {
    console.log("get user");
});

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
 router.post('/user', (req, res) => {
    console.log("create user");
});

module.exports = router;