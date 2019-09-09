const express = require('express');
const router = express.Router();
const {getUserBySession} = require("../database/database");

router.get('/', (req, res) => {
    if (req.cookies.sessionId) {
        const sessionId = req.cookies.sessionId;
        const userData = getUserBySession(sessionId);
        if (userData) res.render('mypage', {userId: userData.id, userName: userData.name});
    } else {
        res.render('index');
    }
});

module.exports = router;