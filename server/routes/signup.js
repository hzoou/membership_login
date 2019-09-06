const express = require('express');
const router = express.Router();
const { insertUser } = require("../database/database.js");

router.post('/', (req, res) => {
    const data = insertUser(req.body.id, req.body);
    res.status(200).send({ status : "SUCCESS", data : data, msg : "회원가입 완료" });
});

module.exports = router;