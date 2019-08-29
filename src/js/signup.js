const color = {
    o : '#0aa603',
    x : '#ff0000'
};

const check = {
    idReg() {
        const regex = /^[a-z0-9]{5,20}/g;
        const text = document.getElementById('idTxt');
        if (regex.test(id.value)) {
            validation = true;
            text.innerText = '사용 가능한 아이디입니다.';
            text.style.color = color.o;
        } else {
            validation = false;
            text.innerText = '5~20자의 영문 소문자, 숫자와 특수기호(_)(-) 만 사용 가능합니다.';
            text.style.color = color.x;
        }
    },

    pwReg() {
        const regex = '';
        const text = document.getElementById('pwTxT');
        if (regex.test(pw.value)) {
            validation = true;
            text.innerText = '안전한 비밀번호입니다.';
            text.style.color = color.o;
        }
    },

    pwSame() {
        const text = document.getElementById('pw2Txt');
        if (pw.value === pw2.value) {
            validation = true;
            text.innerText = '비밀번호가 일치합니다.';
            text.style.color = color.o;
        } else {
            validation = false;
            text.innerText = '비밀번호가 일치하지 않습니다.';
            text.style.color = color.x;
        }

        if (pw.value == pw2.value && !pw.value) {
            validation = false;
            text.innerText = '';
        }
    },

    year() {
        const regex = /^[0-9]{4}$/;
        const text = document.getElementById('birthTxt');
        const age = 2019 - year.value;
        if (!regex.test(year.value)) {
            validation = false;
            text.innerText = '태어난 년도 4자리를 정확하게 입력하세요.';
            text.style.color = color.x;
        } else if (age < 14) {
            validation = false;
            text.innerText = '만 14세 이상만 가입 가능합니다';
            text.style.color = color.x;
        } else {
            validation = true;
            text.innerText = '';
        }
    }
};

const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
months.forEach((m) => {
    const option = document.createElement('option');
    option.innerText = m;
    document.getElementById('month').appendChild(option);
});

let validation = false;
const id = document.getElementById('id');
const pw = document.getElementById('pw');
const pw2 = document.getElementById('pw2');
const year = document.getElementById('year');

id.addEventListener("blur", check.idReg);
pw.addEventListener("change", check.pwSame);
pw2.addEventListener("blur", check.pwSame);
year.addEventListener("blur", check.year);