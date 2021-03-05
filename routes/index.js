const express = require('express');
const router = express.Router();
//import controllers
const userRoutes = require('./users');
const charitiesRoutes = require('./charities');
const categoriesRoutes = require('./categories');
const transactionRoutes = require('./transaction');
const campaignsRoutes = require('./campaigns');

//specify routers here
//router.use('/endpoint', middleware?, controller);
router.use('/user', userRoutes);
router.use('/transaction', transactionRoutes);
router.use('/charities', charitiesRoutes);
router.use('/categories', categoriesRoutes);
router.use('/campaign', campaignsRoutes);

module.exports = router;