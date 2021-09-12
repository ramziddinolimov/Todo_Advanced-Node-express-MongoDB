const router = require("express").Router();

router.get(["/", "/index.html"], (req, res) => {
  res.render("login");
});
router.get("/registration", (req, res) => {
  res.render("registration");
});



module.exports = {
  router,
  path: "/",
};