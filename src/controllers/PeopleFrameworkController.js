const functions = require('../functions');
const utils = require('../utils');

module.exports = {
  async root(request, response){
    response.status(200).send({
      data: "Teste"
    })
  },

  async listAllPeople(request, response){
    response.status(200).send({
      data: "Teste"
    })
  },

  async listPeople(request, response){
    response.status(200).send({
      data: "Teste"
    })
  }
};