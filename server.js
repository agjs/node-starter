const express = require('express');
const config = require('./config');

let app = express();


app.listen(config.EXPRESS.PORT, () => {
    console.log(`Express server running on port ${config.EXPRESS.PORT}.`);
});