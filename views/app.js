// // require('dotenv').config();
// // console.log(process.env);
// const result = require("dotenv").config();
// console.log(result);
// const express = require("express");
// const app = express();
// const path = require("path");
// const mongoose = require("mongoose");
// const Listing = require("./models/listing.js");
// const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
// const methodOverride = require("method-override");
// const ejsMate = require("ejs-mate");
// const wrapAsync = require("./utils/wrapAsync.js");
// const ExpressError = require("./utils/ExpressError.js");

// app.set("view engine","ejs");
// app.set("views",path.join(__dirname,"views"));

// app.use(express.static(path.join(__dirname,"/public")));

// app.use(express.urlencoded({extended : true}));
// app.use(methodOverride("_method"));

// app.engine("ejs",ejsMate);


// main()
// .then((res)=>{
//     console.log("connected to MongoDB");
// })
// .catch((err)=>{
//     console.log(err);
// });

// async function main() {
//     await mongoose.connect(MONGO_URL);
// };

// app.get("/",(req,res)=>{
//    res.send("Hi I Am root...");
// });

// // app.get("/testListing", async (req,res)=>{
// //  let sampleListening = new Listing ({
// //     title : "my new home",
// //     description : "buy the beach",
// //     price : 1200,
// //     location : "delhi",
// //     country : "India",
// //  })
// //   await sampleListening.save();
// //   console.log("saple save");
// //   res.send("sucess");
// // });

// //Index Route
// app.get("/listings",wrapAsync(async (req,res)=>{
//    const allListings =  await Listing.find({});
//    res.render("listings/index.ejs",{allListings});
// }));

// //New listing
// app.get("/listings/new",(req,res)=>{
//     res.render("listings/new.ejs");
// });

// // Create new Listing
// app.post("/listings",  wrapAsync (async(req,res,next)=>{
//     if(!req.body.listing){
//        throw new ExpressError(400,"send valid data for listing")
//     }
//       const newListing = new Listing(req.body.listing);
//       await newListing.save();
//       res.redirect("/listings");
// }))

// //edit Route
// app.get("/listings/:id/edit", wrapAsync(async (req,res)=>{
//     let { id} = req.params;
//     const listing = await Listing.findById(id);
//     res.render("listings/edit.ejs",{ listing});
// }));

// //update Route
// app.put("/listings/:id",wrapAsync(async(req,res)=>{
//     let { id} = req.params;
//     await Listing.findByIdAndUpdate(id,{...req.body.listing});
//     res.redirect(`/listings/${ id}`)
// }));

// //delete Route
// app.delete("/listings/:id", wrapAsync(async(req,res)=>{
//      if(!req.body.listing){
//        throw new ExpressError(400,"send valid data for listing")
//     }
//     let { id} = req.params; 
//     await Listing.findByIdAndDelete(id);
//     res.redirect("/listings");
// }));

// //Show Route
// app.get("/listings/:id", wrapAsync (async(req,res)=>{
//     let { id} = req.params;
//     const listing = await Listing.findById(id);
//     res.render("listings/show.ejs",{ listing});
// }));

// app.all("/random", (req, res, next) => {
//     next(new ExpressError(404, "Page Not Found"));
// });

// //Error handling middleware
// app.use((err,req,res,next)=>{
//     let { statusCode=500,message="somethimg went wrong"} = err;
//     // res.status(statusCode).send(message);
//     res.render("error.ejs");
// });

// app.listen(8080,()=>{
//     console.log("app is listening");
// });

