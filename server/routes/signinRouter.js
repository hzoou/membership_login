const express = require('express');
const router = express.Router();
const {haveId, isCorrectPw, createSession} = require("../database/database.js");
const uuid4 = require('uuid4');

router.post('/', (req, res) => {
    const id = haveId(req.body.id);
    if (id) {
        if (isCorrectPw(req.body.id, req.body.pw)) {
            const sessionId = uuid4();
            createSession(sessionId, req.body.id);
            res.cookie('sessionId', sessionId, {maxAge: 60 * 30 * 1000})
                .status(200)
                .send({
                    status: "SUCCESS",
                    msg: "로그인 완료"
                });
        } else res.status(200).send({status: "FAIL", msg: "비밀번호가 일치하지 않습니다."});
    } else res.status(200).send({status: "FAIL", msg: "아이디가 존재하지 않습니다."});
});

module.exports = router;