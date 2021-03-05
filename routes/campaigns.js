const express = require('express');
const router = express.Router();
var request = require('request');

/**
 * @openapi
 * /:
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
 * /:
 *   post:
 *     description: Used to get all charity campaigns
 *     responses:
 *       200:
 *         description: Retuns all campaigns
 */
router.post('/campaigns', (req, res) => {
    console.log("create campaign");
});