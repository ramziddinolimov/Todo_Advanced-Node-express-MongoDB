const index = require("./index");

module.exports = function (server) {
  server.use(index.path, index.router);
  server.use((req, res) => {
    res.render("error");
  });
};