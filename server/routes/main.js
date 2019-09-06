const express = require('express');
const router = express.Router();
const { getUserBySession } = require("../database/database");

router.get('/', (req, res) => {
    const sessionId = req.cookies.sessionId;
    const userData = getUserBySession(sessionId);
    if (userData) res.render('main', { userId: userData.id });
});

module.exports = router;