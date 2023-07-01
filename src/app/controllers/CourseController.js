const { mutipleMongooseToObject } = require("../../until/mongose");
const Course =require("../models/Course")
class CourseController{
   
    // GET /news/:slug
    show(req,res)
    {
        res.send("COURSE DETAIL"+ req.params.slug)
    }
}
module.exports =new CourseController;