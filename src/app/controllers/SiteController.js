const Course =require("../models/Course")
class SiteController {
 index(req,res,next)
 
 {
  Course.find({})
  .then(course=>res.render('home',{
    course
  }))
  .catch(error=>next(error));

 }
}
  module.exports=new SiteController;