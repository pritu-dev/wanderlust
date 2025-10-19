// const express = require("express");
// // const router = express.Router()
// const wrapAsync = require("../utils/wrapAsync.js");
// const ExpressError = require("../utils/ExpressError.js");
// const { listingSchema} = require("../schema.js");
// const Listing = require("../models/listing.js") 

// const router = express.Router({ mergeParams: true });

// const validateListing = (req,res,next) =>{
//    let { error} = listingSchema.validate(req.body.review);
//       if(error){
//         let errMsg = error.details.map((el) => el.message).join(",");
//         throw new ExpressError(400,errMsg);
//       }
//       else{
//         next();
//       }
// };

// 
// // router.post("/", validateListing, wrapAsync(async (req, res) => {
// //     req.body.listing.price = Number(req.body.listing.price); // convert string to number

// //     const newListing = new Listing(req.body.listing);
// //     await newListing.save();
// //     res.send("listings");
// // }));



// //Index Route
// router.get("/",wrapAsync(async (req,res)=>{
//    const allListings =  await Listing.find({});
//    res.render("listings/index.ejs",{allListings});
// }));

// //New listing
// router.get("/new",wrapAsync((req,res)=>{
//     res.render("listings/new.ejs");
// }));

// //Show Route
// router.get("/:id", wrapAsync (async(req,res)=>{
//     let { id} = req.params;
//     const listing = await Listing.findById(id).populate("reviews");
//     res.render("listings/show.ejs",{ listing});
// }));

// // Create new Listing
// // router.post("/", validateListing, wrapAsync (async(req,res)=>{
// //       const newListing = new Listing(req.body.listing);
// //       console.log(newListing);
// //       await newListing.save();
// //       res.redirect("/listings");
// // }));
// router.post("/", async (req, res) => {
//     const newListing = new Listing(req.body.listing);
//     console.log(newListing);
//     await newListing.save();
   
// });

// //edit Route
// router.get("/:id/edit", wrapAsync(async (req,res)=>{
//     let { id} = req.params;
//     const listing = await Listing.findById(id);
//     res.render("listings/edit.ejs",{ listing});
// }));

// //update Route
// router.put("/:id",validateListing, wrapAsync(async(req,res)=>{
//     let { id} = req.params;
//     await Listing.findByIdAndUpdate(id,{...req.body.listing});
//     res.redirect(`/listings/${ id}`)
// }));



// //delete Route
// router.delete("/:id", wrapAsync(async(req,res)=>{
//     let { id} = req.params; 
//     await Listing.findByIdAndDelete(id);
//     res.redirect("/listings");
// }));

// module.exports = router;


const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn,isOwner,validateListing} = require("../middleware.js");

const listingController = require("../controllers/listings.js");

const multer  = require("multer");
const { storage} = require("../cloudConfig.js");
const upload = multer({ storage});

router.route("/")
.get(wrapAsync(listingController.index))
.post(isLoggedIn, 
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingController.createListing));
// NEW Listing
router.get("/new", isLoggedIn, listingController.renderNewForm);


router.route("/:id")
.get( wrapAsync(listingController.showListing))
.put( isLoggedIn, isOwner, upload.single("listing[image]"),validateListing, wrapAsync(listingController.updateListing))
.delete( isLoggedIn, isOwner,wrapAsync(listingController.destroyListing));


// EDIT Route
router.get("/:id/edit", isLoggedIn, isOwner,wrapAsync(listingController.renderEditForm));


module.exports = router;
