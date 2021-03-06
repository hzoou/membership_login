const userDB = {
    admin: {
        id: 'admin',
        pw: 'admin',
        name: '관리자',
        birth: '1996/9/17',
        gender: '여자',
        email: 'admin@admin.com',
        phone: '01095313051',
        interest: '안녕,난,관리자'
    },

    hzoou: {
        id: 'hzoou',
        pw: '12345',
        name: '혜주',
        birth: '1996/9/17',
        gender: '여자',
        email: 'hzoou@naver.com',
        phone: '01095313051',
        interest: '안녕,난,혜주'
    }
};

const sessionDB = {};

/**
 * Insert user data in userDB
 * @param {string} id
 * @param {string} info
 * @returns {Object} user data
 */
const insertUser = (id, info) => {
    userDB[id] = info;
    return userDB[id];
};

/**
 * Check if userDB has the id
 * @param {string} id
 * @returns {boolean}
 */
const haveId = (id) => (!!userDB[id]);

/**
 * Check if password matches the id
 * @param {string} id
 * @param {string} pw
 * @returns {boolean}
 */
const isCorrectPw = (id, pw) => userDB[id].pw === pw;

/**
 * Create session by user
 * @param {string} sessionId
 * @param {string} userId
 */
const createSession = (sessionId, userId) => sessionDB[sessionId] = userId;

/**
 * Get user by session
 * @param {string} sessionId
 * @returns {boolean|Object}
 */
const getUserBySession = (sessionId) => {
    const userId = sessionDB[sessionId];
    if (userId) return userDB[userId];
    else return false;
};

/**
 * Delete session
 * @param {string} sessionId
 * @returns {boolean}
 */
const deleteSession = (sessionId) => delete sessionDB[sessionId];

module.exports = {insertUser, haveId, isCorrectPw, createSession, getUserBySession, deleteSession};