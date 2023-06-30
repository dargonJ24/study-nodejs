const { mutipleMongooseToObject } = require("../../until/mongose");
const Course =require("../models/Course")
class SiteController {
  index(req, res, next) {
    Course.find({})
    .then(Course =>{
      res.render('home',{
        Course :mutipleMongooseToObject(Course)
      })
    })
      
      .catch(next);
  }
}
  module.exports=new SiteController;