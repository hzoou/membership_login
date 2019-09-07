import {$, fetchAPI} from "./utils.js";

(function () {
    document.title = '로그인';
    const id = $('#id');
    const pw = $('#pw');
    const submitBtn = $('#submit');

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

    const signIn = async () => {
        if (Object.values(validation).every((v) => v.confirm === true)) {
            const body = {
                id: id.value,
                pw: pw.value
            };
            const res = await fetchAPI('/signin', 'POST', body);
            if (res.status == "FAIL") {
                makeModal(res.msg);
            }
            else self.location.href = `././main`;
        } else {
            const element = (Object.values(validation).find((e) => !e.confirm));
            makeModal(element.msg);
        }
    };

    const makeModal = (msg) => {
        const alert = document.createElement('div');
        alert.className = 'alert';
        alert.innerHTML = `<div class="closeBtn">&times;</div>
                               <div>${msg}</div>`;
        $('#submitModal').appendChild(alert);
        $('#submitModal').style.display = "block";
        closeModal();
    };

    const closeModal = () => {
        const closeBtn = $('.closeBtn')[0];
        closeBtn.addEventListener("click", () => {
                document.body.style.overflow = 'auto';
                const parentNode = closeBtn.parentNode;
                const grandNode = closeBtn.parentNode.parentNode;
                if (parentNode.className != 'agreement') parentNode.remove();
                grandNode.style.display = "none";
                closeBtn.className = '';
        });
    };

    const check = (el) => {
        validation[el.id].confirm = (!!el.value)
    };

    id.addEventListener("focus", () => { id.parentNode.style.border = '1px solid #0aa603' });
    id.addEventListener("blur", () => { id.parentNode.style.border = '1px solid #cac9c9' });
    id.addEventListener("blur", check.bind(null, id));

    pw.addEventListener("focus", () => { pw.parentNode.style.border = '1px solid #0aa603' });
    pw.addEventListener("blur", () => { pw.parentNode.style.border = '1px solid #cac9c9' });
    pw.addEventListener("blur", check.bind(null, pw));
    submitBtn.addEventListener("click", signIn);
})();