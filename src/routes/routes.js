const { Router } = require('express');
const PeopleFrameworkController = require('../controllers/PeopleFrameworkController');
const PeopleProcedureController = require('../controllers/PeopleProcedureController');

const routes = Router();

// Rota raíz para testes
routes.get('/', (request, response) => {
  response.status(200).send({
    title: "Performace Analisys",
    version: "0.0.1"
  });
});

routes.get('/framework/allPeople', PeopleFrameworkController.listAllPeople);

routes.get('/procedure/allPeople', PeopleProcedureController.listAllPeople);


module.exports = routes;