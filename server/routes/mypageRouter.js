const express = require('express');
const router = express.Router();
const {getUserBySession} = require("../database/database");

router.get('/', (req, res) => {
    const userData = getUserBySession(req.cookies.sessionId);
    if (userData) res.render('mypage', {userId: userData.id, userName: userData.name});
    else res.redirect('./');
});

router.get('/info', (req, res) => {
    const userData = getUserBySession(req.cookies.sessionId);
    if (userData) {
        res.render('userInfo',
            {userId: userData.id,
            userName: userData.name,
            userBirth: userData.birth,
            userGender: userData.gender,
            userEmail: userData.email,
            userPhone: userData.phone,
            userInterest: userData.interest});
    } else res.redirect('./../');
});

module.exports = router;