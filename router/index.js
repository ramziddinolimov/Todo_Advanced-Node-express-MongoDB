const router = require("express").Router();
const HomeLoginPostController = require("../controllers/HomeLoginPostController");
const HomeSignUpPostController = require("../controllers/HomeSignUpPostController");

router.get(["/", "/index.html"], (req, res) => {
  res.render("login");
});
router.get("/registration", (req, res) => {
  res.render("registration");
});

router.get("/error", (req, res) => {
  res.render("error");
});

router.post('/', HomeLoginPostController)
router.post('/', HomeSignUpPostController)



module.exports = {
  router,
  path: "/",
};