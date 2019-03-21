const express = require('express');
const app = express();
const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

global.__basedir = __dirname;

const db = require('./app/config/db.config.js');

db.sequelize.sync({force: true})
    .then(() => {
        console.log('Drop and Resync with { force: true }');
    });

let router = require('./app/routers/file.router.js');
app.use('/', router);

const server = app.listen(8080, function () {

    let port = server.address().port;

    console.log("App listening at http://%s:%s", 'localhost', port);
});