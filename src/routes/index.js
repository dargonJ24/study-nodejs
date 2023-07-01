const  newsRoute =require("./news")
const serarchRoute =require("./serach")
const site =require("./site")
const courses =require("./courses")
function route(app){
    //app.get('/', (req, res) => { return res.render('home'); })
    app.use('/news',newsRoute)
    app.use('/search',serarchRoute)
    app.use('/course',courses)
    app.use('/',site)
}
module.exports =route;