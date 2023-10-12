import express from "express";
import bodyParser from "body-parser";
import session from 'express-session';
import { randomBytes } from 'crypto';


const app = express();
const port = process.env.PORT || 3000;
const arr_item = [];
const arr_items = [];
const secretKey = randomBytes(64).toString('hex');

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
  }));

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req,res) => {
    res.render("index.ejs")
})

app.get("/today", (req,res) => {
    res.render("today.ejs",{finalArray : req.session.items})
})

app.post("/submitToday", (req,res) => {
    if (!req.session.items) {
        req.session.items = [];
      }
      req.session.items.push(req.body.today_item)
    res.render("today.ejs",{finalArray : req.session.items})
})

app.get("/month", (req,res) => {
    res.render("month.ejs",{finalArray : req.session.items})
})

app.post("/submitMonth", (req,res) => {
    if (!req.session.items) {
        req.session.items = [];
      }
      req.session.items.push(req.body.month_item)
    res.render("month.ejs",{finalArray : req.session.items})
})


app.listen(port, () =>{
    console.log(`Running on port : ${port}`);
})
