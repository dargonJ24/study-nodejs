const Course =require("../models/Course")
class SiteController {
  async index(req, res) {
    try {
      const coursesxx = await Course.find({});
      res.json(coursesxx);
    } catch (err) {
      res.status(400).json({ error: 'ERROR !!' });
    }
  }
}
  module.exports=new SiteController;