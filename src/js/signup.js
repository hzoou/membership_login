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

id.addEventListener("blur", check.idReg);