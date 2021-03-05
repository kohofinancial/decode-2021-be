const express = require('express');
const router = express.Router();
//import controllers here
const charitiesRoutes = require('./charities');
const categoriesRoutes = require('./categories');


//specify routers here
//router.use('/endpoint', middleware?, controller);
router.use('/charities', charitiesRoutes);
router.use('/categories', categoriesRoutes);

module.exports = router;