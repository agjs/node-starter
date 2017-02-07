const express = require('express');
const config = require('./config');

let app = express();

app.use('/', require('./api/main/main.router'));

app.listen(config.EXPRESS.PORT, () => {
    console.log(`Express server running on port ${config.EXPRESS.PORT}.`);
});