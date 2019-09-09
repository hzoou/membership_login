const express = require('express');
const router = express.Router();
const {deleteSession} = require("../database/database");

router.get('/', (req, res) => {
    const sessionId = req.cookies.sessionId;
    deleteSession(sessionId);
    res.clearCookie('sessionId').redirect('./');
});

module.exports = router;