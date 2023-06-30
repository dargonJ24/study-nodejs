const Course =require("../models/Course")
class SiteController {
 index(req,res,next)
 
 {
  Course.find({})
  .then(course=>{
    course =course.map(course=>course.toObject)
    res.render('home',{course})

  })
  
  .catch(error=>next(error));

 }
}
  module.exports=new SiteController;