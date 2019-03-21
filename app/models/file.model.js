module.exports = (sequelize, Sequelize) => {
    return sequelize.define('file', {
        type: {
            type: Sequelize.STRING
        },
        name: {
            type: Sequelize.STRING
        },
        data: {
            type: Sequelize.BLOB('long')
        }
    });
};