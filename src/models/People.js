const Sequelize = require("sequelize");
const connection = require("../database/mysql");

const People = connection.define('PEOPLE',{
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
},{
    timestamps: false
})

People.sync({force:false});

module.exports = People;