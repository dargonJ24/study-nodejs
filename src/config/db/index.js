const mongoose =require('mongoose')
async function connect()
{
   try{
    await mongoose.connect("mongodb://127.0.0.1:27017/blog",{
        useNewUrlParser:true ,
        useUnifiedTopology: true

    });
    console.log("Connect sucessfully !!!")

   }catch(error)
   {
    console.log(error)
   }
}
module.exports ={connect};