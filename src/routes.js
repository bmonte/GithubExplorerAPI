const { Router } = require('express');
const repositoryController = require('./controller/repository');
const likeController = require('./controller/like');

const routes = Router();

routes.get("/repositories", repositoryController.index);

routes.post("/repositories", repositoryController.create);

routes.put("/repositories/:id", repositoryController.update);

routes.delete("/repositories/:id", repositoryController.remove);

routes.post("/repositories/:id/like", likeController.create);

module.exports = routes;
