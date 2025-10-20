const User = require("../models/user");

module.exports.renderSignUpForm = (req,res)=>{
    res.render("users/signup.ejs");
};

module.exports.signup = async(req,res)=>{
 try{
    let { username,email,password} = req.body;
    const newUser = new User({ email,username});
    const registedUser = await User.register(newUser,password);
    console.log(registedUser);
    req.login(registedUser,(err)=>{
       if(err) {
         return next(err);
       }
         req.flash("success","Welcome to Wanderlust");
         res.redirect("/listings");
    });

 }
   catch(e){
    req.flash("error"," Username is already registered");
    res.redirect("/signup");
   }
}

module.exports.renderLogin = (req,res)=>{
   res.render("users/login.ejs");
}

module.exports.login =  async (req,res) =>{
            req.flash("success","Welcome back to wanderlust!");
            let redirectUrl = res.locals.redirectUrl || "/listings";
            res.redirect(redirectUrl);
 };

 module.exports.loggout = (req,res,next)=>{
   req.logout((err)=>{
      if(err){
         return next(err);
      }
      req.flash("success","You are logged out!");
      res.redirect("/listings");
   })
}