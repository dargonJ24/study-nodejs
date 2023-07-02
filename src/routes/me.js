const express =require('express')
const router =express.Router();
const meController =require('../app/controllers/MeController')
//newcontrller.index

router.get("/course/",meController.storedCourse)
module.exports=router