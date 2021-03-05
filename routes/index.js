const express = require('express');
const router = express.Router();
//import controllers here
const charitiesRoutes = require('./charities');

//specify routers here
//router.use('/endpoint', middleware?, controller);
router.use('/charities', charitiesRoutes);

module.exports = router;