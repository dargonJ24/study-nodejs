const Course =require("../models/Course")
class SiteController {
  index(req, res, next) {
    Course
      .find({})
      .lean()
      .then((Courses) => res.render("home", { Courses }))
      .catch(next);
  }
}
  module.exports=new SiteController;