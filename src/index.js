
const path = require('path'); 
const express = require('express'); 

const handlebars = require('express-handlebars').engine;
const app = express(); 
const port = 3000; // HTTP log dùng để hiển thị log khi CT chạy app.use(morgan('combined'));
// code for version new update 28/6/2023
// Template engine app.engine('handlebars', handlebars.engine) app.set('view engine', 'handlebars'); app.set('views', path.join(__dirname, 'resource/views'));
app.engine(
  "hbs",
  handlebars({
      extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

app.get('/', (req, res) => { return res.render('home'); })

app.listen(port, () => { console.log("app run " +port); })