const { Sequelize } = require('sequelize');
const functions = require('../functions');
//const utils = require('../utils');
const People = require('../models/People');

module.exports = {
  async root(request, response){
    response.status(200).send({
      data: "Teste"
    })
  },

  async listAllPeople(request, response){
    try {
      const allPeople = await People.findAll();

      response.status(200).send({
        data: allPeople
      })
    } catch (error) {
      console.log(error);

      response.status(400)
    }
    
  },

  async listPeople(request, response){
    response.status(200).send({
      data: "Teste"
    })
  }
};