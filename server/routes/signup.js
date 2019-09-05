const express = require('express');
const router = express.Router();
const { insertUser } = require("../database/database.js");

router.post('/', function signup(req, res) {
    const body = JSON.parse(JSON.stringify(req.body));
    const data = insertUser(body.id, body);
    res.status(200).send({ status : "200", data : data });
});

module.exports = router;