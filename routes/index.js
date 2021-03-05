const express = require('express');
const router = express.Router();
//import controllers
const usersRoutes = require('./users');
const charitiesRoutes = require('./charities');
const categoriesRoutes = require('./categories');
const transactionsRoutes = require('./transaction');
const campaignsRoutes = require('./campaigns');

//specify routers here
router.use('/users', usersRoutes);
router.use('/transactions', transactionsRoutes);
router.use('/charities', charitiesRoutes);
router.use('/categories', categoriesRoutes);
router.use('/campaigns', campaignsRoutes);

module.exports = router;