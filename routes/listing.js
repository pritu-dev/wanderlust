const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn,isOwner,validateListing} = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer  = require("multer");
const { storage} = require("../cloudConfig.js");
const upload = multer({ storage});
const Listing = require("../models/listing.js") 

router.route("/search")
<<<<<<< HEAD
.get(
=======
  .get(
>>>>>>> 99833b2cf6c12d9c8c2df6250747ff2f84d68eee
    wrapAsync(async (req, res) => {
      const { location } = req.query;
      let allListings;

      if (location && location.trim() !== "") {
        allListings = await Listing.find({
          location: { $regex: location, $options: "i" },
        });
      } else {
        allListings = await Listing.find({});
      }

      res.render("listings/index.ejs", { allListings });
    })
  )

router.route("/")
.get(wrapAsync(listingController.index))
.post(isLoggedIn, 
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingController.createListing));

// NEW Listing
router.get("/new", isLoggedIn, listingController.renderNewForm);
router.get("/reserve",listingController.reserveFormRender);
router.get("/confermation",listingController.confermation);

router.route("/:id")
.get( wrapAsync(listingController.showListing))
.put( isLoggedIn, isOwner, upload.single("listing[image]"),validateListing, wrapAsync(listingController.updateListing))
.delete( isLoggedIn, isOwner,wrapAsync(listingController.destroyListing));

// EDIT Route
router.get("/:id/edit", isLoggedIn, isOwner,wrapAsync(listingController.renderEditForm));

module.exports = router;

