const { Router } = require("express");

function createResourceRouter(name, handlers = {}) {
  const router = Router();
  const param = `${name}Id`;

  const defaults = {
    list: (req, res) => res.send(`All ${name}s`),
    get: (req, res) => res.send(`${name} ID: ${req.params[param]}`),
  };

  const { list, get } = { ...defaults, ...handlers };

  router.get("/", list);
  router.get(`/:${param}`, get);
  router.post("/new")

  return router;
}

module.exports = createResourceRouter;