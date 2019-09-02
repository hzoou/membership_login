const color = {
    o : '#0aa603',
    x : '#ff0000'
};

const validation = {
    id : false,
    pw : false,
    pw2 : false,
    name : false,
    year : false,
    day : false,
    gender : false,
    email : false,
    phone : false,
    interest : false,
    agreement : false
};

const elements = {
    id : '',
    pw : '',
    pw2 : '',
    name : '',
    year : '',
    month : '',
    day : '',
    gender : '',
    email : '',
    phone : '',
    interest : '',
    tags : '',
    agreeBtn : '',
    resetBtn : '',
    submitBtn : ''
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

    name() {
        if (elements.name.value) validation.name = true;
        else validation.name = false;
    },

    year() {
        const regex = /^[0-9]{4}$/;
        const text = document.getElementById('birthTxt');
        const nowYear = new Date().getFullYear();
        const age = nowYear - year.value;
        if (!regex.test(year.value)) {
            validation.year = false;
            text.innerText = '태어난 년도 4자리를 정확하게 입력하세요.';
            text.style.color = color.x;
        } else if (year.value > nowYear) {
            validation.year = false;
            text.innerText = '미래에서 오셨군요.';
            text.style.color = color.x;
        } else if (age < 14) {
            validation.year = false;
            text.innerText = '만 14세 이상만 가입 가능합니다.';
            text.style.color = color.x;
        } else if (age > 100) {
            validation.year = false;
            text.innerText = '정말이세요?';
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
        if (year.value % 400 == 0 || (year.value % 100 != 0 && year.value % 4 == 0)) days[2] = 29;

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
        } else {
            validation.gender = true;
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
    },

    interest() {
        const text = document.getElementById('interestTxt');
        if (tags.childElementCount < 4) {
            validation.interest = false;
            text.innerText = '3개 이상의 관심사를 입력하세요.';
            text.style.color = color.x;
        } else {
            validation.interest = true;
            text.innerText = '';
        }
    }
};

const action = {
    addInterest(e) {
        if (e.key == ',') {
            const tag = document.createElement('div');
            const value = interest.value.slice(0, -1);
            tag.className = 'tag';
            tag.innerHTML = `<span>${value}</span><span class="tagRemove">x</span>`;
            if (value) tags.insertBefore(tag, tags.childNodes[tags.childNodes.length-2]);
            interest.value = '';
            const remove = document.querySelectorAll('.tagRemove');
            [].forEach.call(remove, (x) => {
                x.addEventListener("click", () => { x.parentNode.remove(); check.interest(); });
            });
        }

        if (e.key == 'Backspace' && tags.childElementCount > 1 && interest.value == '') {
            const tag = tags.childNodes[tags.childNodes.length-3];
            const value = tag.childNodes[0].textContent;
            interest.value = value;
            tag.remove();
            check.interest();
        }
    },

    submitForm(e) {
        if (Object.values(validation).every((v) => v === true)) {
            console.log('홰ㅣ원가입 완료!');
        } else {
            const idx = Object.values(validation).indexOf(false);
            const required = ['아이디를', '비밀번호를', '동일한 비밀번호인지', '이름을', '태어난 년도를',
                                '태어난 날짜를', '성별을', '이메일을', '휴대전화를', '관심사를', '약관 동의 여부를'];
            const alert = document.createElement('div');
            alert.className = 'alert';
            alert.innerHTML = `<div class="closeBtn">&times;</div>
                               <div>${required[idx]} 확인해주세요!</div>`;
            document.getElementById('submitModal').appendChild(alert);
            document.getElementById('submitModal').style.display = "block";
            // elements[Object.keys(validation)[idx]].focus();
            action.closeModal();
            e.preventDefault();
        }
    },

    resetBtn(e) {
        e.preventDefault();
        const confirm = document.createElement('div');
        confirm.className = 'confirm';
        confirm.innerHTML = `<p>모든 내용을 새로 작성하시겠습니까?</p>
                             <div class="closeBtn cancelBtn">취소</div>
                             <div class="resetBtn">확인</div>`;
        document.getElementById('resetModal').appendChild(confirm);
        document.getElementById('resetModal').style.display = "block";
        action.resetForm();
        action.closeModal();
    },

    resetForm() {
        const resetBtn = document.querySelectorAll('.resetBtn');
        [].forEach.call(resetBtn, (el) => {
            el.addEventListener("click", () => {
                document.getElementById("form").reset();
                const parentNode = el.parentNode;
                const grandNode = el.parentNode.parentNode;
                const tag = document.getElementsByClassName('tag');
                while (tag.length) tags.removeChild(tag[0]);
                parentNode.remove();
                grandNode.style.display = "none";
                Object.keys(validation).forEach((e) => validation[e] = false);
                const span = document.querySelectorAll('span');
                [].forEach.call(span, (el) => {
                    if (el.id != 'birthTxt') { console.log(el.id); el.innerText = ''; }
                });
            });
        });
    },

    makeAgreeModal() {
        agreementModal.style.display = "block";
        document.getElementsByClassName('agreement')[0].firstElementChild.className = 'closeBtn';
        action.closeModal();
        action.admitAgreeModal();
    },

    admitAgreeModal() {
        const agreementModal = document.getElementById("agreementModal");
        const agreementContent = document.getElementsByClassName('agreementContent')[0];
        const agreementBtn = document.getElementsByClassName('agreementBtn')[0];
        agreementContent.addEventListener("scroll", (e) => {
            if (e.target.scrollHeight - e.target.scrollTop <= e.target.clientHeight) {
                agreementBtn.style.border = '1px solid #0aa603';
                agreementBtn.style.background = '#0aa603';
                agreementBtn.style.cursor = 'pointer';
                agreementBtn.disabled = false;
            }
        });
        agreementBtn.addEventListener("click", () => {
            validation.agreement = true;
            agreement.checked = true;
            agreementModal.style.display = "none";
        });
    },

    closeModal() {
        const closeBtn = document.querySelectorAll('.closeBtn');
        [].forEach.call(closeBtn, (el) => {
            el.addEventListener("click", () => {
                const parentNode = el.parentNode;
                const grandNode = el.parentNode.parentNode;
                if (parentNode.className != 'agreement') parentNode.remove();
                grandNode.style.display = "none";
                el.className = '';
            });
        });
    }
};

const getElementById = () => {
    Object.keys(elements).forEach((i) => elements[i] = document.getElementById(i));
    addEventListener();
    addMonth();
};

const addEventListener = () => {
    const element = document.querySelectorAll('.element');
    [].forEach.call(element, (el) => {
        let parentNode = el.parentNode;
        if (el.id === 'interest') parentNode = el.parentNode.parentNode;
        el.addEventListener("focus", () => {parentNode.style.border = '1px solid #0aa603'});
        el.addEventListener("blur", () => {parentNode.style.border = '1px solid #cac9c9'});
        el.addEventListener("keydown", (e) => {if (e.key === 'Enter') e.preventDefault()});
    });
};

const addMonth = () => {
    const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    months.forEach((m) => {
        const option = document.createElement('option');
        option.innerText = m;
        month.appendChild(option);
    });
};

getElementById();

elements.id.addEventListener("blur", check.id);
elements.pw.addEventListener("blur", check.pw);
elements.pw.addEventListener("change", check.pwSame);
elements.pw2.addEventListener("blur", check.pwSame);
elements.name.addEventListener("blur", check.name);
elements.year.addEventListener("blur", check.year);
if (elements.day.value) { elements.year.addEventListener("blur", check.day); }
elements.month.addEventListener("change", check.day);
elements.day.addEventListener("blur", check.day);
elements.gender.addEventListener("change", check.gender);
elements.email.addEventListener("blur", check.email);
elements.phone.addEventListener("blur", check.phone);
elements.interest.addEventListener("keyup", check.interest);
elements.interest.addEventListener("keyup", action.addInterest);
elements.agreeBtn.addEventListener("click", action.makeAgreeModal);
elements.resetBtn.addEventListener("click", action.resetBtn);
elements.submitBtn.addEventListener("click", action.submitForm);