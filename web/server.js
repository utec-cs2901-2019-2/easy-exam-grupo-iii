const express = require("express");
const next = require("next");
const Router = require("./routes");

const app = next({ dev: process.env.NODE_ENV !== "production" });
const server = express();
const handle = Router.getRequestHandler(app);

app.prepare().then(() => {
  server.get("*", (req, res) => handle(req, res));
  server.listen(8081);
});

