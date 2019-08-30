const color = {
    o : '#0aa603',
    x : '#ff0000'
};

const validation = {
    id : false,
    pw : false,
    pw2 : false,
    year : false,
    day : false,
    gender : false,
    email : false,
    phone : false,
    interest : false,
    agreement: false
};

const check = {
    id() {
        const regex = /^[a-z0-9]{5,20}/g;
        const text = document.getElementById('idTxt');
        if (regex.test(id.value)) {
            validation.id = true;
            text.innerText = '사용 가능한 아이디입니다.';
            text.style.color = color.o;
        } else {
            validation.id = false;
            text.innerText = '5~20자의 영문 소문자, 숫자와 특수기호(_)(-) 만 사용 가능합니다.';
            text.style.color = color.x;
        }
    },

    pw() {
        const text = document.getElementById('pwTxt');
        if (pw.value.length < 8 || pw.value.length > 16) {
          validation.pw = false;
          text.innerText = '8자 이상 16자 이하로 입력해주세요.';
          text.style.color = color.x;
        } else if (!new RegExp(/[A-Z]/).test(pw.value)) {
            validation.pw = false;
            text.innerText = '영문 대문자를 최소 1자 이상 포함해주세요.';
            text.style.color = color.x;
        } else if (!new RegExp(/[a-z]/).test(pw.value)) {
            validation.pw = false;
            text.innerText = '영문 문자를 최소 1자 이상 포함해주세요.';
            text.style.color = color.x;
        } else if (!new RegExp(/\d/).test(pw.value)) {
            validation.pw = false;
            text.innerText = '숫자를 최소 1자 이상 포함해주세요.';
            text.style.color = color.x;
        } else if (!new RegExp(/[#$^+=!*()@%&]/).test(pw.value)) {
            validation.pw = false;
            text.innerText = '특수문자를 최소 1자 이상 포함해주세요.';
            text.style.color = color.x;
        } else {
            validation.pw = true;
            text.innerText = '안전한 비밀번호입니다.';
            text.style.color = color.o;
        }
    },

    pwSame() {
        const text = document.getElementById('pw2Txt');
        if (pw.value === pw2.value) {
            validation.pw2 = true;
            text.innerText = '비밀번호가 일치합니다.';
            text.style.color = color.o;
        } else {
            validation.pw2 = false;
            text.innerText = '비밀번호가 일치하지 않습니다.';
            text.style.color = color.x;
        }

        if (!pw2.value) {
            validation.pw2 = false;
            text.innerText = '';
        }
    },

    year() {
        const regex = /^[0-9]{4}$/;
        const text = document.getElementById('birthTxt');
        const age = 2019 - year.value;
        if (!regex.test(year.value)) {
            validation.year = false;
            text.innerText = '태어난 년도 4자리를 정확하게 입력하세요.';
            text.style.color = color.x;
        } else if (age < 14) {
            validation.year = false;
            text.innerText = '만 14세 이상만 가입 가능합니다';
            text.style.color = color.x;
        } else {
            validation.year = true;
            text.innerText = '';
        }
    },

    day() {
        const days = ['false', 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        const text = document.getElementById('birthTxt');
        const m = month.options[month.selectedIndex].value;
        if (!(0 < day.value && day.value <= days[m])) {
            validation.day = false;
            text.innerText = '태어난 날짜를 다시 확인해주세요.';
            text.style.color = color.x;
        } else {
            validation.day = true;
            text.innerText = '';
        }
    },

    gender() {
        const text = document.getElementById('genderTxt');
        if(!gender.options[gender.selectedIndex].id) {
            validation.gender = false;
            text.innerText = '성별을 선택하세요.';
            text.style.color = color.x;
        } else {
            validation.gender = true;
            text.innerText = '';
        }
    },

    email() {
        const regex = /^[0-9a-z\-_]*@[a-z]+(.[a-z]{2,3})+$/;
        const text = document.getElementById('emailTxt');
        if (!regex.test(email.value)) {
            validation.email = false;
            text.innerText = '이메일 주소를 다시 확인해주세요.';
            text.style.color = color.x;
        } else {
            validation.email = true;
            text.innerText = '';
        }
    },

    phone() {
        const regex = /^010[0-9]{7,8}$/;
        const text = document.getElementById('phoneTxt');
        if (!regex.test(phone.value)) {
            validation.phone = false;
            text.innerText = '형식에 맞지 않는 번호입니다.';
            text.style.color = color.x;
        } else {
            validation.phone = true;
            text.innerText = '';
        }
    }
};

const action = {
    submit() {
        if (Object.values(validation).every((b) => b === true)) {
            //TODO 모든 값 확인
        } else {
            //TODO 유효성검사 확인되지 않은 값 존재
        }
    }
};

const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
months.forEach((m) => {
    const option = document.createElement('option');
    option.innerText = m;
    document.getElementById('month').appendChild(option);
});

const id = document.getElementById('id');
const pw = document.getElementById('pw');
const pw2 = document.getElementById('pw2');
const year = document.getElementById('year');
const month = document.getElementById('month');
const day = document.getElementById('day');
const gender = document.getElementById('gender');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const submit = document.getElementById('submit');

id.addEventListener("blur", check.id);
pw.addEventListener("blur", check.pw);
pw.addEventListener("change", check.pwSame);
pw2.addEventListener("blur", check.pwSame);
year.addEventListener("blur", check.year);
month.addEventListener("change", check.day);
day.addEventListener("blur", check.day);
gender.addEventListener("change", check.gender);
email.addEventListener("blur", check.email);
phone.addEventListener("blur", check.phone);
submit.addEventListener("click", action.submit);