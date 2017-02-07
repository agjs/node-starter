const express = require('express');
const config = require('./config');

let app = express();


require('./config/middleware')(app);

require('./config/mongo')();

app.use('/', require('./api/main/main.router'));
app.use('/books', require('./api/book/book.router'));

app.listen(config.EXPRESS.PORT, () => {
    console.log(`Express server running on port ${config.EXPRESS.PORT}.`);
});

module.exports = app;