const { MongooseToObject } = require("../../until/mongose");
const Course =require("../models/Course")

class CourseController{
   
    // GET course/news/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
          .then((course) => {
            res.render('course/show',{course : MongooseToObject(course)})
          });
      }
    // GET course/create
    create(req,res,next){
      res.render("course/create")

    }
    //[POST] /courses/store
    store(req,res,next)
    {
      const course =new Course(req.body)
      course.save()
      .then(()=>res.redirect('/')

      )
      .catch(error => {})
        }
}
module.exports =new CourseController;