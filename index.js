// imports
const express = require('express');
const bodyParser = require('body-parser');

// express
const routes = require('./routes');
const app = express();

app.use(bodyParser.json());
app.use(routes);

//server running
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

