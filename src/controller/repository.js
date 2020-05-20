const { uuid } = require("uuidv4");

const repositories = [];

module.exports = {
  repositories,

  index(request, response) {
    return response.json(repositories);
  },

  create(request, response) {
    const { title, url, techs } = request.body;

    const repository = {
      id: uuid(),
      title,
      url,
      techs,
      likes: 0,
    };

    repositories.push(repository);

    return response.json(repository);
  },

  update(request, response) {
    const { id } = request.params;
    const { title, url, techs } = request.body;

    const repository = repositories.find(repo => {
      return repo.id === id;
    });

    if(!repository)
      return response.status(400).json({ error: "Repository not found!" });

    Object.assign(repository, { title, url, techs });

    return response.json(repository);
  },

  remove(request, response) {
    const { id } = request.params;

    const repositoryIndex = repositories.findIndex(repo => {
      return repo.id === id;
    });

    if(repositoryIndex <= 1)
      return response.status(400).json({ error: "Repository not found!" });

    repositories.splice(repositoryIndex, 1);

    return response.status(204).send();
  }
};
