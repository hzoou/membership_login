import {$, fetchAPI} from "./utils.js";

const validation = {
    'id': {
        confirm: false,
        msg: '아이디를 입력해주세요.'
    },
    'pw': {
        confirm: false,
        msg: '비밀번호를 입력해주세요.'
    }
};

const elements = {
    id: '',
    pw: '',
    submitBtn: ''
};

const init = {
    getElementById() {
        document.title = '로그인';
        elements.id = $('#id');
        elements.pw = $('#pw');
        elements.submitBtn = $('#submit');
        this.addEventListener();
    },

    addEventListener() {
        elements.id.addEventListener("focus", () => { elements.id.parentNode.style.border = '1px solid #0aa603' });
        elements.id.addEventListener("blur", () => { elements.id.parentNode.style.border = '1px solid #cac9c9' });
        elements.id.addEventListener("blur", this.check.bind(null, elements.id));
        elements.pw.addEventListener("focus", () => { elements.pw.parentNode.style.border = '1px solid #0aa603' });
        elements.pw.addEventListener("blur", () => { elements.pw.parentNode.style.border = '1px solid #cac9c9' });
        elements.pw.addEventListener("blur", this.check.bind(null, elements.pw));
        elements.submitBtn.addEventListener("click", this.signIn);
    },

    async signIn() {
        if (Object.values(validation).every((v) => v.confirm === true)) {
            const body = {
                id: elements.id.value,
                pw: elements.pw.value
            };
            const res = await fetchAPI('/signin', 'POST', body);
            if (res.status == "FAIL") {
                init.makeModal(res.msg);
            }
            else self.location.href = '/mypage';
        } else {
            const element = (Object.values(validation).find((e) => !e.confirm));
            init.makeModal(element.msg);
        }
    },

    makeModal(msg) {
        const alert = document.createElement('div');
        alert.className = 'alert';
        alert.innerHTML = `<div class="closeBtn">&times;</div>
                           <div>${msg}</div>`;
        $('#submitModal').appendChild(alert);
        $('#submitModal').style.display = "block";
        init.closeModal();
    },

    closeModal() {
        const closeBtn = $('.closeBtn')[0];
        closeBtn.addEventListener("click", () => {
            document.body.style.overflow = 'auto';
            const parentNode = closeBtn.parentNode;
            const grandNode = closeBtn.parentNode.parentNode;
            if (parentNode.className != 'agreement') parentNode.remove();
            grandNode.style.display = "none";
            closeBtn.className = '';
        });
    },

    check(el) {
        validation[el.id].confirm = (!!el.value)
    }
};

export {init};
