const Sequelize = require("sequelize");
const connection = require("../database/mysql");

const People = connection.define('people',{
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    gender:{
        type: Sequelize.STRING,
        allowNull: false
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false
    },
    job:{
        type: Sequelize.STRING,
        allowNull: false
    },
    phone:{
        type: Sequelize.STRING,
        allowNull: false
    }
})

People.sync({force:false});

module.exports = People;