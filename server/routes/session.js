const express = require('express');
const router = express.Router();
const {getUserBySession} = require("../database/database");

router.get('/', (req, res) => {
    const check = getUserBySession(req.cookies.sessionId);
    if (check) res.status(200).send({ status: "SUCCESS"});
    else res.status(200).send({ status: "FAIL"});
});

module.exports = router;