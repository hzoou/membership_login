import {$, fetchAPI, makeModal, closeModal} from "./utils.js";

const constant = {
    'ID_INCORRECT': '5~20자의 영문 소문자, 숫자와 특수기호(_)(-) 만 사용 가능합니다.',
    'PW_MIN_LENGTH': 8,
    'PW_MAX_LENGTH': 16,
    'PW_CORRECT': '안전한 비밀번호입니다.',
    'PW_INCORRECT_LEN': '8자 이상 16자 이하로 입력해주세요.',
    'PW_INCORRECT_UPPER': '영문 대문자를 최소 1자 이상 포함해주세요.',
    'PW_INCORRECT_LOWER': '영문 소문자를 최소 1자 이상 포함해주세요.',
    'PW_INCORRECT_NUM': '숫자를 최소 1자 이상 포함해주세요.',
    'PW_INCORRECT_SYMBOL': '특수문자를 최소 1자 이상 포함해주세요.',
    'PW_SAME': '비밀번호가 일치합니다.',
    'PW_DIFFERENT': '비밀번호가 일치하지 않습니다.',
    'AGE_MIN': 14,
    'AGE_MAX': 100,
    'YEAR_INCORRECT': '태어난 년도 4자리를 정확하게 입력하세요.',
    'YEAR_FUTURE': '미래에서 오셨군요.',
    'YEAR_PAST': '정말이세요?',
    'YEAR_UNDER_AGE': '만 14세 이상만 가입 가능합니다.',
    'DAY_INCORRECT': '태어난 날짜를 다시 확인해주세요.',
    'EMAIL_INCORRECT': '이메일 주소를 다시 확인해주세요.',
    'PHONE_INCORRECT': '형식에 맞지 않는 번호입니다.',
    'INTEREST_MIN_COUNT': 4,
    'INTEREST_INCORRECT': '3개 이상의 관심사를 입력하세요.'
};

const validation = {
    'id': {
        confirm: false,
        msg: '아이디를 확인해주세요.'
    },
    'pw': {
        confirm: false,
        msg: '비밀번호를 확인해주세요.'
    },
    'pw2': {
        confirm: false,
        msg: '동일한 비밀번호인지 확인해주세요.'
    },
    'name': {
        confirm: false,
        msg: '이름을 확인해주세요.'
    },
    'year': {
        confirm: false,
        msg: '태어난 년도를 확인해주세요.'
    },
    'day': {
        confirm: false,
        msg: '태어난 날짜를 확인해주세요.'
    },
    'gender': {
        confirm: false,
        msg: '성별을 확인해주세요.'
    },
    'email': {
        confirm: false,
        msg: '이메일을 확앤해주세요.'
    },
    'phone': {
        confirm: false,
        msg: '휴대전화를 확인해주세요.'
    },
    'interest': {
        confirm: false,
        msg: '관심사를 확인해주세요.'
    },
    'agreement': {
        confirm: false,
        msg: '약관 동의 여부를 확인해주세요.'
    }
};

const elements = {
    id: '',
    pw: '',
    pw2: '',
    name: '',
    year: '',
    month: '',
    day: '',
    gender: '',
    email: '',
    phone: '',
    interest: '',
    tags: '',
    agreement: '',
    agreeBtn: '',
    resetBtn: '',
    submitBtn: ''
};

const color = {
    o: '#0aa603',
    x: '#ff0000'
};

const init = {
    getElementById() {
        document.title = '회원가입';
        Object.keys(elements).forEach((i) => elements[i] = $(`#${i}`));
        this.addAllEventListener();
        this.addEventListener();
        this.addMonth();
    },

    addAllEventListener() {
        const element = $('.element');
        [].forEach.call(element, (el) => {
            let parentNode = el.parentNode;
            if (el.id === 'interest') parentNode = el.parentNode.parentNode;
            el.addEventListener("focus", () => {parentNode.style.border = '1px solid #0aa603'});
            el.addEventListener("blur", () => {parentNode.style.border = '1px solid #cac9c9'});
            el.addEventListener("keydown", (e) => {if (e.key === 'Enter') e.preventDefault()});
        });
    },

    addEventListener() {
        elements.id.addEventListener("blur", check.id);
        elements.pw.addEventListener("blur", check.pw);
        elements.pw.addEventListener("change", check.pwSame);
        elements.pw2.addEventListener("blur", check.pwSame);
        elements.name.addEventListener("blur", check.name);
        elements.year.addEventListener("blur", check.year);
        if (elements.day.value) elements.year.addEventListener("blur", check.day);
        elements.month.addEventListener("change", check.day);
        elements.day.addEventListener("blur", check.day);
        elements.gender.addEventListener("change", check.gender);
        elements.email.addEventListener("blur", check.email);
        elements.phone.addEventListener("blur", check.phone);
        elements.interest.addEventListener("keyup", check.interest);
        elements.interest.addEventListener("keyup", action.addInterest);
        elements.interest.addEventListener("keydown", action.handleInterest);
        elements.agreeBtn.addEventListener("click", action.displayAgreeModal);
        elements.resetBtn.addEventListener("click", action.displayResetModal);
        elements.submitBtn.addEventListener("click", action.displaySubmitModal);
    },

    addMonth() {
        const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        months.forEach((m) => {
            const option = document.createElement('option');
            option.innerText = m;
            elements.month.appendChild(option);
        })
    }
};

const check = {
    async id() {
        const idRegex = /^[a-z0-9_-]{5,20}$/g;
        const text = $('#idTxt');
        if (elements.id.value) {
            const duplication = await fetchAPI(`/signup/${elements.id.value}`, "GET");
            check.duplicateId(duplication, text);
            if (!idRegex.test(elements.id.value)) {
                validation['id'].confirm = false;
                text.innerText = constant.ID_INCORRECT;
                text.style.color = color.x;
            }
        }
    },

    duplicateId(res, text) {
        if (res.status === "SUCCESS") {
            validation['id'].confirm = true;
            text.innerText = res.msg;
            text.style.color = color.o;
        } else {
            validation['id'].confirm = false;
            text.innerText = res.msg;
            text.style.color = color.x;
        }
    },

    pw() {
        const text = $('#pwTxt');
        const regexUpper = /[A-Z]/;
        const regexLower = /[a-z]/;
        const regexNum = /\d/;
        const regexSymbol = /[#$^+=!*()@%&]/;

        if (elements.pw.value.length < constant.PW_MIN_LENGTH || elements.pw.value.length > constant.PW_MAX_LENGTH) {
            validation['pw'].confirm = false;
            text.innerText = constant.PW_INCORRECT_LEN;
            text.style.color = color.x;
        } else if (!new RegExp(regexUpper).test(elements.pw.value)) {
            validation['pw'].confirm = false;
            text.innerText = constant.PW_INCORRECT_UPPER;
            text.style.color = color.x;
        } else if (!new RegExp(regexLower).test(elements.pw.value)) {
            validation['pw'].confirm = false;
            text.innerText = constant.PW_INCORRECT_LOWER;
            text.style.color = color.x;
        } else if (!new RegExp(regexNum).test(elements.pw.value)) {
            validation['pw'].confirm = false;
            text.innerText = constant.PW_INCORRECT_NUM;
            text.style.color = color.x;
        } else if (!new RegExp(regexSymbol).test(elements.pw.value)) {
            validation['pw'].confirm = false;
            text.innerText = constant.PW_INCORRECT_SYMBOL;
            text.style.color = color.x;
        } else {
            validation['pw'].confirm = true;
            text.innerText = constant.PW_CORRECT;
            text.style.color = color.o;
        }
    },

    pwSame() {
        const text = $('#pw2Txt');
        if (elements.pw.value === elements.pw2.value) {
            validation['pw2'].confirm = true;
            text.innerText = constant.PW_SAME;
            text.style.color = color.o;
        } else {
            validation['pw2'].confirm = false;
            text.innerText = constant.PW_DIFFERENT;
            text.style.color = color.x;
        }
        if (!elements.pw2.value) {
            validation['pw2'].confirm = false;
            text.innerText = '';
        }
    },

    name() {
        if (elements.name.value) validation['name'].confirm = true;
        else validation['name'].confirm = false;
    },

    year() {
        const yearRegex = /^[0-9]{4}$/;
        const text = $('#birthTxt');
        const nowYear = new Date().getFullYear();
        const age = nowYear - elements.year.value;
        if (!yearRegex.test(elements.year.value)) {
            validation['year'].confirm = false;
            text.innerText = constant.YEAR_INCORRECT;
            text.style.color = color.x;
        } else if (elements.year.value > nowYear) {
            validation['year'].confirm = false;
            text.innerText = constant.YEAR_FUTURE;
            text.style.color = color.x;
        } else if (age < constant.AGE_MIN) {
            validation['year'].confirm = false;
            text.innerText = constant.YEAR_UNDER_AGE;
            text.style.color = color.x;
        } else if (age > constant.AGE_MAX) {
            validation['year'].confirm = false;
            text.innerText = constant.YEAR_PAST;
            text.style.color = color.x;
        } else {
            validation['year'].confirm = true;
            text.innerText = '';
        }
    },

    day() {
        const days = ['false', 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        const text = $('#birthTxt');
        const m = elements.month.options[elements.month.selectedIndex].value;
        if (elements.year.value % 400 == 0 || (elements.year.value % 100 != 0 && elements.year.value % 4 == 0)) days[2] = 29;
        if (!(0 < elements.day.value && elements.day.value <= days[m])) {
            validation['day'].confirm = false;
            text.innerText = constant.DAY_INCORRECT;
            text.style.color = color.x;
        } else {
            validation['day'].confirm = true;
            text.innerText = '';
        }
        check.year();
    },

    gender() {
        if (!elements.gender.options[elements.gender.selectedIndex].id) validation['gender'].confirm = false;
        else validation['gender'].confirm = true;
    },

    email() {
        const emailRegex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        const text = $('#emailTxt');
        if (!emailRegex.test(elements.email.value)) {
            validation['email'].confirm = false;
            text.innerText = constant.EMAIL_INCORRECT;
            text.style.color = color.x;
        } else {
            validation['email'].confirm = true;
            text.innerText = '';
        }
    },

    phone() {
        const phoneRegex = /^010[0-9]{7,8}$/;
        const text = $('#phoneTxt');
        if (!phoneRegex.test(elements.phone.value)) {
            validation['phone'].confirm = false;
            text.innerText = constant.PHONE_INCORRECT;
            text.style.color = color.x;
        } else {
            validation['phone'].confirm = true;
            text.innerText = '';
        }
    },

    interest() {
        const text = $('#interestTxt');
        if (elements.tags.childElementCount < constant.INTEREST_MIN_COUNT) { //TODO 매직넘버
            validation['interest'].confirm = false;
            text.innerText = constant.INTEREST_INCORRECT;
            text.style.color = color.x;
        } else {
            validation['interest'].confirm = true;
            text.innerText = '';
        }
    }
};

const action = {
    addInterest(e) {
        if (e.key == ',') {
            const tag = document.createElement('div');
            const value = elements.interest.value.slice(0, -1);
            tag.className = 'tag';
            tag.innerHTML = `<span>${value}</span><span class="tagRemove">x</span>`;
            if (value) elements.tags.insertBefore(tag, elements.tags.childNodes[elements.tags.childNodes.length - 2]);
            elements.interest.value = '';
            const remove = $('.tagRemove');
            [].forEach.call(remove, (x) => {
                x.addEventListener("click", () => {
                    x.parentNode.remove();
                    check.interest();
                });
            });
            check.interest();
        }

        if (e.key == 'Backspace' && elements.tags.childElementCount > 1 && elements.interest.value == '') {
            const tag = elements.tags.childNodes[elements.tags.childNodes.length - 3];
            const value = tag.childNodes[0].textContent;
            elements.interest.value = value;
            tag.remove();
            check.interest();
        }
    },

    handleInterest() {
        elements.interest.value = elements.interest.value.replace(",", "");
    },

    async displaySubmitModal() {
        if (Object.values(validation).every((v) => v.confirm === true)) {
            const interestTags = $('#interestTags');
            $('.tag').forEach((t) => interestTags.value += `${t.textContent.slice(0, -1)},`);
            const body = {
                id: elements.id.value,
                pw: elements.pw.value,
                name: elements.name.value,
                birth: `${elements.year.value}/${elements.month.value}/${elements.day.value}`,
                gender: elements.gender.value,
                email: elements.email.value,
                phone: elements.phone.value,
                interest: interestTags.value.slice(0, -1)
            };
            await fetchAPI('/signup', 'POST', body);
            self.location.href = `/mypage`;
        } else {
            document.body.style.overflow = 'hidden';
            const invalidatedValue = Object.values(validation).find((e) => !e.confirm);
            makeModal(invalidatedValue.msg);
            //TODO focus()
        }
    },

    displayResetModal() {
        const confirm = document.createElement('div');
        document.body.style.overflow = 'hidden';
        confirm.className = 'confirm';
        confirm.innerHTML = `<p>모든 내용을 새로 작성하시겠습니까?</p>
                         <div class="closeBtn cancelBtn">취소</div>
                         <div class="resetBtn">확인</div>`;
        $('#resetModal').appendChild(confirm);
        $('#resetModal').style.display = "block";
        action.clickResetBtn();
        closeModal();
    },

    clickResetBtn() {
        const resetBtn = $('.resetBtn')[0];
        resetBtn.addEventListener("click", () => {
            $("#form").reset();
            const parentNode = resetBtn.parentNode;
            const grandNode = resetBtn.parentNode.parentNode;
            while ($('.tag').length) $('.tag')[0].remove();
            parentNode.remove();
            document.body.style.overflow = 'auto';
            grandNode.style.display = "none";
            Object.keys(validation).forEach((e) => validation[e].confirm = false);
            const span = $('span');
            [].forEach.call(span, (el) => {
                if (el.id != 'birthTxt') el.innerText = '';
            });
        });
    },

    displayAgreeModal() {
        const agreementModal = $("#agreementModal");
        const agreementContent = $('.agreementContent')[0];
        document.body.style.overflow = 'hidden';
        agreementModal.style.display = "block";
        $('.agreement')[0].firstElementChild.className = 'closeBtn';
        closeModal();
        agreementContent.addEventListener("scroll", action.scrollAgreeModal);
    },

    scrollAgreeModal(e) {
        const agreementBtn = $('.agreementBtn')[0];
        if (e.target.scrollHeight - e.target.scrollTop <= e.target.clientHeight) {
            agreementBtn.style.border = '1px solid #0aa603';
            agreementBtn.style.background = '#0aa603';
            agreementBtn.style.cursor = 'pointer';
            agreementBtn.disabled = false;
        }
        agreementBtn.addEventListener("click", action.ActivatedAgreeBtn);
    },

    ActivatedAgreeBtn() {
        const agreementModal = $("#agreementModal");
        validation['agreement'].confirm = true;
        elements.agreement.checked = true;
        agreementModal.style.display = "none";
        document.body.style.overflow = 'auto';
    }
};

export { init };