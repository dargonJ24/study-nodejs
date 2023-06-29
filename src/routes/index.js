const  newsRoute =require("./news")
function route(app){
    //app.get('/', (req, res) => { return res.render('home'); })
    app.use('/news',newsRoute)

}
module.exports =route;