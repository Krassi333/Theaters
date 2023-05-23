const express = require('express');
const database = require('');
const expressConfig=require('');

const port = 3000;

async function start() {
    const app = express();

    express(app);

    app.listen(port, () => console.log(`Server is listening on port ${port}`));
}

start();