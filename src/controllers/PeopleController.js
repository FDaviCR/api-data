const functions = require('../functions');
const utils = require('../utils');

module.exports = {
  async listPeoples(request, response){
    response.status(200).send({
      data: "Teste"
    })
  }
};