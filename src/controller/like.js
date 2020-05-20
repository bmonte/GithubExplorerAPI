const { repositories } = require('./repository');

module.exports = {
  create(request, response) {
    const { id } = request.params;

    const repository = repositories.find(repo => {
      return repo.id === id;
    });

    if(!repository)
      return response.status(400).json({ error: "Unable to like this repository" });

    repository.likes += 1;

    return response.json(repository);
  }
};
