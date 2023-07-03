const express =require('express')
const router =express.Router();
const courseController =require('../app/controllers/CourseController')
//newcontrller.index

router.get("/:id",courseController.edit)
router.put("/:id",courseController.update)
router.delete("/:id",courseController.delete)
router.get('/create',courseController.create)
router.post('/store',courseController.store)
router.get('/:slug',courseController.show)

module.exports=router