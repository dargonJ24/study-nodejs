const  newsRoute =require("./news")
const serarchRoute =require("./serach")
const site =require("./site")
const courses =require("./courses")
const me =require('./me')
function route(app){
    app.use("/me",me)
    app.use('/news',newsRoute)
    app.use('/search',serarchRoute)
    app.use('/course',courses)
    app.use('/',site)
}
module.exports =route;