const router = require("express").Router();

router.get(["/", "/index.html"], (req, res) => {
  res.render("login");
});
router.get("/register", (req, res) => {
  res.render("register");
});



module.exports = {
  router,
  path: "/",
};