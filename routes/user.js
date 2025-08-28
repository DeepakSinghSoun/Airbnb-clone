const express = require("express");
const router = express.Router();
const passport = require("passport");
const wrapAsync = require("../utils/wrapAsync.js");
const { saveRedirecUrl } = require("../middleware.js");

const userController = require("../controllers/user.js");

// =================== SIGNUP ROUTES ===================


router.route("/signup")
    .get(userController.renderSignupForm)
    .post(wrapAsync(userController.signup));


// =================== LOGIN ROUTES ===================


router.route("/login")
    .get(userController.renderLoginForm)
    .post(passport.authenticate("local", {
        failureRedirect: "/login",
        failureFlash: true
    }), saveRedirecUrl, userController.login);

// =================== LOGOUT ROUTES ===================

router.get("/logout", userController.logout);

module.exports = router;
