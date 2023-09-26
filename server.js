import express from "express";
import expressLayout from "express-ejs-layouts";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename);
const app=express();

const PORT=process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.render('home')
})


app.use(expressLayout);
app.set('views',path.join(__dirname, '/resources/views' ));
app.set('view engine', 'ejs');


app.listen(PORT,()=>{
    console.log(`Server Running on ${PORT}`);
})