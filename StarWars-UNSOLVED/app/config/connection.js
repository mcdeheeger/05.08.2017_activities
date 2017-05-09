// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Requiring mysql package
var Sequelize = require('sequelize');
var sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'|'mariadb'|'sqlite'|'postgres'|'mssql',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
});


// Exporting our connection
module.exports = sequelize;
