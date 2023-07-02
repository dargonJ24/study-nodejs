const { MongooseToObject, mutipleMongooseToObject } = require("../../until/mongose");
const Course =require("../models/Course")

class MeController{
   
    storedCourse(req,res,next){
        Course.find({})
        .then(course => {
            res.render('me/course-store', {
                course: mutipleMongooseToObject(course)
            });
        })
        .catch(next);
    }
}
module.exports =new MeController;