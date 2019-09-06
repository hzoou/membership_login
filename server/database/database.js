const DB = {
    admin: {
        pw: 'admin',
        name: '관리자',
        birth: '1996/9/17',
        gender: '여자',
        email: 'admin@admin.com',
        phone: '01095313051',
        interest: '안녕,난,관리자'
    },

    hzoou: {
        pw: '12345',
        name: '혜주',
        birth: '1996/9/17',
        gender: '여자',
        email: 'hzoou@naver.com',
        phone: '01095313051',
        interest: '안녕,난,혜주'
    }
};

const insertUser = (id, info) => {
    DB[id] = info;
    return DB[id];
};

const isDuplicateId = (id) => {
    if (DB[id]) return true;
    else return false;
};

module.exports = { insertUser, isDuplicateId } ;