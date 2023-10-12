import express from "express";
import bodyParser from "body-parser";



const app = express();
const port =  process.env.PORT || 3000;
const arr_item = [];
const arr_items = [];




app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req,res) => {
    res.render("index.ejs")
})

app.get("/today", (req,res) => {
    res.render("today.ejs",{finalArray : arr_item})
})

app.post("/submitToday", (req,res) => {
    arr_item.push(req.body.today_item)
    res.render("today.ejs",{finalArray : arr_item})
})

app.get("/month", (req,res) => {
    res.render("month.ejs",{finalArray : arr_items})
})

app.post("/submitMonth", (req,res) => {
    arr_items.push(req.body.month_item)
    res.render("month.ejs",{finalArray : arr_items})
})


app.listen(port, () =>{
    console.log(`Running on port : ${port}`);
})
