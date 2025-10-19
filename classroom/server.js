const express = require("express");
const app = express();
const cookieParse = require("cookie-parser");
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

const sessionOption = {
     secret : "secreat",
     resave : false,
     saveUninitialized : true,
};

app.use(cookieParse("secreat"));
app.use(session(sessionOption));
app.use(flash());

app.get("/sendcookies",(req,res)=>{
   res.cookie("made-in", "India");
   res.cookie("greet", "Hello");
   res.cookie("name", "shrdha");
   res.send("cookie send")
});

app.get("/getcookies",(req,res)=>{
  let { name = "tony"} = req.cookies;
  res.send(`<h1> Hello ${ name}</h1>`);
});

app.get("/signedcookies",(req,res)=>{
  res.cookie("name", "Shradha",{ signed : true});
  res.send("cookie send");
});

app.get("/accesscookie",(req,res)=>{
    console.log(req.cookies);
    console.log(req.signedCookies);
    res.send("cookie send");
});

app.get("/testcookie",(req,res)=>{
    res.send("cookie send");
});

app.get("/getcount",(req,res)=>{

    if(req.session.count){
        req.session.count++;
    }
    else{
      req.session.count = 1;
    }
        res.send(`<h1> request sent ${ req.session.count} times</h1>`);
});

app.use((req,res,next)=>{
  res.locals.successBox = req.flash("successMsg");
  res.locals.errorBox = req.flash("errorMsg");
  next();
})
app.get("/register",(req,res) =>{
  let { name = "tony"}  = req.query;
  req.session.name = name;
  if(name === "tony"){
     req.flash("errorMsg", "User not registerd..")
  }
  else{
      req.flash("successMsg"," User registerd...");
  }
  res.redirect("/hello");
});

app.get("/hello",(req,res) =>{
  res.render("page.ejs");
});

app.get("/",(req,res) =>{
  res.send("Hi, I am Root")
});

app.listen(8080, () => {
    console.log("Server is Listening to 8080");
})