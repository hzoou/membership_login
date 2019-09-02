window.onlaod = init = {
    validation: {
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
    },
    
    elements: {
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
    },

    getElementById() {
        Object.keys(init.elements).forEach((i) => init.elements[i] = document.getElementById(i));
        this.addAllEventListener();
        this.addEventListener();
        this.addMonth();
    },

    addAllEventListener() {
        const element = document.querySelectorAll('.element');
        [].forEach.call(element, (el) => {
            let parentNode = el.parentNode;
            if (el.id === 'interest') parentNode = el.parentNode.parentNode;
            el.addEventListener("focus", () => {parentNode.style.border = '1px solid #0aa603'});
            el.addEventListener("blur", () => {parentNode.style.border = '1px solid #cac9c9'});
            el.addEventListener("keydown", (e) => {if (e.key === 'Enter') e.preventDefault()});
        });
    },

    addEventListener() {
        init.elements.id.addEventListener("blur", check.id);
        init.elements.pw.addEventListener("blur", check.pw);
        init.elements.pw.addEventListener("change", check.pwSame);
        init.elements.pw2.addEventListener("blur", check.pwSame);
        init.elements.name.addEventListener("blur", check.name);
        init.elements.year.addEventListener("blur", check.year);
        if (init.elements.day.value) { init.elements.year.addEventListener("blur", check.day); }
        init.elements.month.addEventListener("change", check.day);
        init.elements.day.addEventListener("blur", check.day);
        init.elements.gender.addEventListener("change", check.gender);
        init.elements.email.addEventListener("blur", check.email);
        init.elements.phone.addEventListener("blur", check.phone);
        init.elements.interest.addEventListener("keyup", check.interest);
        init.elements.interest.addEventListener("keyup", action.addInterest);
        init.elements.agreeBtn.addEventListener("click", action.makeAgreeModal);
        init.elements.resetBtn.addEventListener("click", action.resetBtn);
        init.elements.submitBtn.addEventListener("click", action.submitForm);
    },

    addMonth() {
        const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        months.forEach((m) => {
            const option = document.createElement('option');
            option.innerText = m;
            init.elements.month.appendChild(option);
        })
    }
};

window.onlaod = check = {
    color: {
        o : '#0aa603',
        x : '#ff0000'
    },
    
    id() {
        const regex = /^[a-z0-9]{5,20}/g;
        const text = document.getElementById('idTxt');
        if (regex.test(id.value)) {
            init.validation.id = true;
            text.innerText = '사용 가능한 아이디입니다.';
            text.style.color = check.color.o;
        } else {
            init.validation.id = false;
            text.innerText = '5~20자의 영문 소문자, 숫자와 특수기호(_)(-) 만 사용 가능합니다.';
            text.style.color = check.color.x;
        }
    },

    pw() {
        const text = document.getElementById('pwTxt');
        if (pw.value.length < 8 || pw.value.length > 16) {
            init.validation.pw = false;
            text.innerText = '8자 이상 16자 이하로 입력해주세요.';
            text.style.color = check.color.x;
        } else if (!new RegExp(/[A-Z]/).test(pw.value)) {
            init.validation.pw = false;
            text.innerText = '영문 대문자를 최소 1자 이상 포함해주세요.';
            text.style.color = check.color.x;
        } else if (!new RegExp(/[a-z]/).test(pw.value)) {
            init.validation.pw = false;
            text.innerText = '영문 문자를 최소 1자 이상 포함해주세요.';
            text.style.color = check.color.x;
        } else if (!new RegExp(/\d/).test(pw.value)) {
            init.validation.pw = false;
            text.innerText = '숫자를 최소 1자 이상 포함해주세요.';
            text.style.color = check.color.x;
        } else if (!new RegExp(/[#$^+=!*()@%&]/).test(pw.value)) {
            init.validation.pw = false;
            text.innerText = '특수문자를 최소 1자 이상 포함해주세요.';
            text.style.color = check.color.x;
        } else {
            init.validation.pw = true;
            text.innerText = '안전한 비밀번호입니다.';
            text.style.color = check.color.o;
        }
    },

    pwSame() {
        const text = document.getElementById('pw2Txt');
        if (pw.value === pw2.value) {
            init.validation.pw2 = true;
            text.innerText = '비밀번호가 일치합니다.';
            text.style.color = check.color.o;
        } else {
            init.validation.pw2 = false;
            text.innerText = '비밀번호가 일치하지 않습니다.';
            text.style.color = check.color.x;
        }

        if (!pw2.value) {
            init.validation.pw2 = false;
            text.innerText = '';
        }
    },

    name() {
        if (init.elements.name.value) init.validation.name = true;
        else init.validation.name = false;
    },

    year() {
        const regex = /^[0-9]{4}$/;
        const text = document.getElementById('birthTxt');
        const nowYear = new Date().getFullYear();
        const age = nowYear - year.value;
        if (!regex.test(year.value)) {
            init.validation.year = false;
            text.innerText = '태어난 년도 4자리를 정확하게 입력하세요.';
            text.style.color = check.color.x;
        } else if (year.value > nowYear) {
            init.validation.year = false;
            text.innerText = '미래에서 오셨군요.';
            text.style.color = check.color.x;
        } else if (age < 14) {
            init.validation.year = false;
            text.innerText = '만 14세 이상만 가입 가능합니다.';
            text.style.color = check.color.x;
        } else if (age > 100) {
            init.validation.year = false;
            text.innerText = '정말이세요?';
            text.style.color = check.color.x;
        } else {
            init.validation.year = true;
            text.innerText = '';
        }
    },

    day() {
        const days = ['false', 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        const text = document.getElementById('birthTxt');
        const m = init.elements.month.options[init.elements.month.selectedIndex].value;
        if (init.elements.year.value % 400 == 0 || (init.elements.year.value % 100 != 0 && init.elements.year.value % 4 == 0)) days[2] = 29;

        if (!(0 < init.elements.day.value && init.elements.day.value <= days[m])) {
            init.validation.day = false;
            text.innerText = '태어난 날짜를 다시 확인해주세요.';
            text.style.color = check.color.x;
        } else {
            init.validation.day = true;
            text.innerText = '';
        }
    },

    gender() {
        const text = document.getElementById('genderTxt');
        if(!init.elements.gender.options[init.elements.gender.selectedIndex].id) {
            init.validation.gender = false;
        } else {
            init.validation.gender = true;
            text.innerText = '';
        }
    },

    email() {
        const regex = /^[0-9a-z\-_]*@[a-z]+(.[a-z]{2,3})+$/;
        const text = document.getElementById('emailTxt');
        if (!regex.test(init.elements.email.value)) {
            init.validation.email = false;
            text.innerText = '이메일 주소를 다시 확인해주세요.';
            text.style.color = check.color.x;
        } else {
            init.validation.email = true;
            text.innerText = '';
        }
    },

    phone() {
        const regex = /^010[0-9]{7,8}$/;
        const text = document.getElementById('phoneTxt');
        if (!regex.test(init.elements.phone.value)) {
            init.validation.phone = false;
            text.innerText = '형식에 맞지 않는 번호입니다.';
            text.style.color = check.color.x;
        } else {
            init.validation.phone = true;
            text.innerText = '';
        }
    },

    interest() {
        const text = document.getElementById('interestTxt');
        if (init.elements.tags.childElementCount < 4) {
            init.validation.interest = false;
            text.innerText = '3개 이상의 관심사를 입력하세요.';
            text.style.color = check.color.x;
        } else {
            init.validation.interest = true;
            text.innerText = '';
        }
    }
};

window.onlaod = action = {
    addInterest(e) {
        if (e.key == ',') {
            const tag = document.createElement('div');
            const value = init.elements.interest.value.slice(0, -1);
            tag.className = 'tag';
            tag.innerHTML = `<span>${value}</span><span class="tagRemove">x</span>`;
            if (value) tags.insertBefore(tag, tinit.elements.ags.childNodes[init.elements.tags.childNodes.length-2]);
            init.elements.interest.value = '';
            const remove = document.querySelectorAll('.tagRemove');
            [].forEach.call(remove, (x) => {
                x.addEventListener("click", () => { x.parentNode.remove(); check.interest(); });
            });
        }

        if (e.key == 'Backspace' && init.elements.tags.childElementCount > 1 && interest.value == '') {
            const tag = init.elements.tags.childNodes[init.elements.tags.childNodes.length-3];
            const value = tag.childNodes[0].textContent;
            init.elements.interest.value = value;
            tag.remove();
            check.interest();
        }
    },

    submitForm(e) {
        if (Object.values(init.validation).every((v) => v === true)) {
            console.log('홰ㅣ원가입 완료!');
        } else {
            const idx = Object.values(init.validation).indexOf(false);
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
                Object.keys(init.validation).forEach((e) => init.validation[e] = false);
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
            init.validation.agreement = true;
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

init.getElementById();

