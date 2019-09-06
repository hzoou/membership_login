const express = require('express');
const router = express.Router();
const { haveId, isCorrectPw } = require("../database/database.js");

router.post('/', (req, res) => {
    const id = haveId(req.body.id);
    if (id) {
        if (isCorrectPw(req.body.id, req.body.pw)) res.status(200).send({ status : "SUCCESS", msg : "로그인 완료" });
        else res.status(200).send({ status : "FAIL", msg : "비밀번호가 일치하지 않습니다." });
    }
    else res.status(200).send({ status : "FAIL", msg : "아이디가 존재하지 않습니다." });
});

module.exports = router;