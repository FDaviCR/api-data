const { Sequelize } = require('sequelize');
//const functions = require('../functions');
//const utils = require('../utils');

module.exports = {
  async root(request, response){
    response.status(200).send({
      data: "Teste"
    })
  },

  async listAllPeople(request, response){
    const allPeople = await Sequelize.query("CALL SelectAllPeople()");
    
    response.status(200).send({
      data: allPeople
    })
  },

  async listPeople(request, response){
    response.status(200).send({
      data: "Teste"
    })
  }
};