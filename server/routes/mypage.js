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

router.get('/info', (req, res) => {
    if (req.cookies.sessionId) {
        const sessionId = req.cookies.sessionId;
        const userData = getUserBySession(sessionId);
        if (userData) {
            res.render('info',
                {userId: userData.id,
                userName: userData.name,
                userBirth: userData.birth,
                userGender: userData.gender,
                userEmail: userData.email,
                userPhone: userData.phone,
                userInterest: userData.interest});
        }
    } else {
        res.redirect('./../');
    }
});

module.exports = router;