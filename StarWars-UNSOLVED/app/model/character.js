var Sequelize = require('sequelize');

var character = Sequelize.define('character', {
    name: {
        type: Sequelize.STRING,
        field: 'first_name' // Will result in an attribute that is firstName when user facing but first_name in the database
    },
    role: {
        type: Sequelize.STRING
    },
    age: {
        type: Sequelize.INTEGER
    },
    forcePoints: {
        type: Sequelize.INTEGER
    }
}, {
    freezeTableName: true // Model tableName will be the same as the model name
});

character.sync({force: true}).then(function () {
    // Table created
    return User.create({
        name: 'John',
        role: 'Hancock',
        age: 25,
        forcePoints: 300
    });
});