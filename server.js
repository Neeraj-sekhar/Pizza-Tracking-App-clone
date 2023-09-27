const express = require("express");
const expressLayout = require("express-ejs-layouts");
const path = require("path");
const app = express();



const PORT=process.env.PORT || 3000;

//ASSETS
app.use(express.static('public'))
app.get("/",(req,res)=>{
    res.render('home')
})


app.use(expressLayout);
app.set('views',path.join(__dirname, '/resources/views' ));
app.set('view engine', 'ejs');


app.listen(PORT,()=>{
    console.log(`Server Running on ${PORT}`);
})