import { $, fetchAPI } from "./utils.js";

(function () {
    document.title = '로그인';
    const id = $('#id');
    const pw = $('#pw');
    const submitBtn = $('#submit');

    const validation = {
        'id' : {
            confirm: false,
            msg: '아이디를 입력해주세요.'
        },
        'pw' : {
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
            if (res.status == "FAIL") alert(res.msg);
            else self.location.href = "././";
        } else {
            const msg = (Object.values(validation).find((e) => !e.confirm)).msg;
            alert(msg);
        }
    };

    const check = (el) => { validation[el.id].confirm = (!!el.value) };

    id.addEventListener("blur", check.bind(null, id));
    pw.addEventListener("blur", check.bind(null, pw));
    submitBtn.addEventListener("click", signIn);
})();