const mongoose =require('mongoose')
var slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Schema =mongoose.Schema;
const Course =new Schema({name: {type:String ,maxLength:255},
    name:{type :String,required:true},
    description:{type:String, maxLength : 600},
    image : {type:String,maxLength:255},
    videoid: {type:String,require:true},
    slug: { type: String, slug: "name" }
    
})
module.exports=mongoose.model('Course',Course)