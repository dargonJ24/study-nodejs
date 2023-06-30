const express =require('express')
const router =express.Router();
const SiteController =require('../app/controllers/SiteController')
//newcontrller.index
router.use('/',SiteController.index)
module.exports=router