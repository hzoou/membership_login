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

const insertUser = (id, info) => {
    userDB[id] = info;
    return userDB[id];
};

const haveId = (id) => (!!userDB[id]);

const isCorrectPw = (id, pw) => userDB[id].pw === pw;

const createSession = (sessionId, userId) => sessionDB[sessionId] = userId;

const getUserBySession = (sessionId) => {
    const userId = sessionDB[sessionId];
    if (userId) return userDB[userId];
    else return false;
};

const deleteSession = (sessionId) => delete sessionDB[sessionId];


module.exports = {insertUser, haveId, isCorrectPw, createSession, getUserBySession, deleteSession};