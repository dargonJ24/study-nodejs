const express =require('express')
const router =express.Router();
const courseController =require('../app/controllers/CourseController')
//newcontrller.index
  router.use('/:slug',courseController.show)

module.exports=router