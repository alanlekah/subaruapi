const express = require('express');
const locker = require('./index.js');
const app = express();
const port = 'PORT' in process.env ? process.env.PORT : 3120;

app.get('/lock', (req, res) => {
    let event = { 'path' : '/lock' };
    locker.lock_unlock(event);
    res.sendStatus(200)
});

app.get('/unlock', (req, res) => {
    let event = { 'path' : '/unlock' };
    locker.lock_unlock(event);
    res.sendStatus(200)
});

app.listen(port, () => console.log(`Car locker app listening on port ${port}!`));