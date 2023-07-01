const { MongooseToObject } = require("../../until/mongose");
const Course =require("../models/Course")
class CourseController{
   
    // GET /news/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
          .then((course) => {
            res.render('course/show',{course : MongooseToObject(course)})
          });
      }
}
module.exports =new CourseController;