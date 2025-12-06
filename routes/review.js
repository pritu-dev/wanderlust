<<<<<<< HEAD
const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
=======
// const express = require("express");
// const router = express.Router({ mergeParams: true });
// const wrapAsync = require("../utils/wrapAsync.js");
// const ExpressError = require("../utils/ExpressError.js");
// const Review = require("../models/review.js");
// const {  reviewSchema} = require("../schema.js");
// const Listing = require("../models/listing.js");



// const validateReview = (req, res, next) => {
//     const { error } = reviewSchema.validate(req.body);
//     if (error) {
//         let errMsg = error.details.map(el => el.message).join(",");
//         throw new ExpressError(400, errMsg);
//     } else {
//         next();
//     }
// };
// //Add Reviews in listing reviews field Array
// router.post("/",validateReview, wrapAsync(async (req,res)=>{
//    let listing = await Listing.findById(req.params.id);
//    let newReview = new Review(req.body.review);

//    listing.reviews.push(newReview);

//    await newReview.save();
//    await listing.save();

//    res.redirect(`/listings/${ listing._id}`);

// }));

// //Delete reviews  Route
// router.delete("/:reviewId",wrapAsync(async (req,res)=>{
//   let { id, reviewId} = req.params;
//   await Listing.findByIdAndUpdate(id, {$pull : {reviews : reviewId}});
//   await Review.findByIdAndDelete(reviewId);
 
//   res.redirect(`/listings/${id}`);
// }));

// module.exports = router;





const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
>>>>>>> e0e2065334ce48879c2a94317cd516b1aee8eeee
const { validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js");

const reviewController = require("../controllers/reviews.js")

// CREATE Review
router.post("/",isLoggedIn,validateReview, wrapAsync(reviewController.createReview));

// DELETE Review
router.delete("/:reviewId",isLoggedIn, isReviewAuthor,wrapAsync(reviewController.destroyReview));

module.exports = router;

