const express =require('express')
const router =express.Router();
const courseController =require('../app/controllers/CourseController')
//newcontrller.index

router.post('/store',courseController.store)
router.use('/:create',courseController.create)
router.use('/:slug',courseController.show)

module.exports=router