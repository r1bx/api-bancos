var express = require('express');
var app = express();
var BancosService = require('./BancosService');

var HTTP_PORT = 8000;

app.listen(HTTP_PORT, () => {
    console.log(`Server running on port ${HTTP_PORT}`);
});

app.get('/bancos', async (req, res, next) => {
    res.status(200);
    res.json(await BancosService.getAllBancos());
});

app.use(function (req, res) {
    res.status(404);
});