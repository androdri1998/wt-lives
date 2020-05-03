const routes = require("express").Router();
const livesController = require("../app/controllers/lives.controller");

const validateParams = require("../app/middlewares/validateParams");
const authMiddleware = require("../app/middlewares/auth");

const {
  createLiveSchema,
  getLivesSchema,
  deleteLiveSchema,
} = require("../app/schemas/lives.schema");

routes.use(authMiddleware);

routes.post(
  "/",
  validateParams(createLiveSchema, "body"),
  livesController.createLive
);

routes.get(
  "/",
  validateParams(getLivesSchema, "query"),
  livesController.getLives
);

routes.delete(
  "/:live_id",
  validateParams(deleteLiveSchema, "params"),
  livesController.deleteLive
);

module.exports = routes;
