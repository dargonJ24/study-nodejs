const { mutipleMongooseToObject } = require("../../until/mongose");
const Course =require("../models/Course")
class CourseController{
   
    // GET /news/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
          .then((course) => {
            if (!course) {
              // If the course is not found, send a 404 response
              res.status(404).json({ error: 'Course not found' });
            } else {
              // If the course is found, send a JSON response
              res.json(course);
            }
          })
          .catch((err) => {
            // Handle the error and send an appropriate response
            next(err);
          });
      }
}
module.exports =new CourseController;