const  newsRoute =require("./news")
const serarchRoute =require("./serach")
function route(app){
    //app.get('/', (req, res) => { return res.render('home'); })
    app.use('/news',newsRoute)
    app.use('/search',serarchRoute)

}
module.exports =route;