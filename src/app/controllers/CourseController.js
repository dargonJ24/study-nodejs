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
      const formdata =req.body
      formdata.image= `https://img.youtube.com/vi/${req.body.videoid}/maxresdefault.jpg"`
      const course =new Course(formdata)
      course.save()
      .then(()=>res.redirect('/')

      )
      .catch(error => {})
        }

      //GET EDIT
      edit(req,res,next){
        Course.findById(req.params.id)
        .then(course =>res.render('course/edit',{
          course : MongooseToObject(course)
        }))
  
      }
       // PUT course/:id
    update(req,res,next){
      Course.updateOne({_id:req.params.id},req.body)
      .then(()=>res.redirect('/me/course'))
      .catch(next)

      
    }
    //DELETE course/:id
    delete(req,res,next)
    {
      Course.deleteOne({
        _id: req.params.id
      })
      .then(()=>res.redirect('back'))
      .catch(next)
    }

}
module.exports =new CourseController;