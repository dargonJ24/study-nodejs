const newsRouter = require('./news')

function routes(app){
    app.use('/news', newsRouter)
}

module.exports = routes