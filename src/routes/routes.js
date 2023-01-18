const { Router } = require('express');
//const BankSlipController = require('../controllers/BankSlipController');
const routes = Router();

// Rota raíz para testes
routes.get('/', (request, response) => {
  response.status(200).send({
    title: "Performace Analisys",
    version: "0.0.1"
  });
});

//routes.get('/boleto/:linhaDigitavel', BankSlipController.linhaDigitavel);

module.exports = routes;