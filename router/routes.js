const HomeRoute = require("./index");

module.exports = function (server) {
  server.use(HomeRoute.path, HomeRoute.router);
  server.use((req, res) => {
    res.render("error");
  });
};