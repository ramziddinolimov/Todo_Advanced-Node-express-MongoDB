const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3030;
const cookieParser = require("cookie-parser");
const mongodb = require("./modules/mongo");
const routes = require("./router/routes");

const server = express();


server.listen(PORT, () => {
    console.log(`SERVER READY AT ${PORT}`);
  });


  // Middlewares
server.use(express.json());
server.use(
  express.urlencoded({
    extended: true,
  })
);
// Settings
server.set("view engine", "ejs");

(async () => {
  const db = await mongodb();
  try {
    server.use((req, res, next) => {
      req.db = db;
      next();
    });
  } catch (error) {
    console.log(error);
  } finally {
        routes(server);
    }
})();