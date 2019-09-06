const express = require('express');
const router = express.Router();
const { insertUser, haveId } = require("../database/database.js");

router.post('/', (req, res) => {
    const data = insertUser(req.body.id, req.body);
    res.status(200).send({ status : "SUCCESS", data : data, msg : "회원가입 완료" });
});

router.get('/:id', (req, res) => {
    haveId(req.params.id) ?
        res.status(200).send({ status : "FAIL", msg : "중복된 아이디입니다. 다른 아이디를 사용해주세요." }) :
        res.status(200).send({ status : "SUCCESS", msg : "사용 가능한 아이디입니다." }) ;
});

module.exports = router;