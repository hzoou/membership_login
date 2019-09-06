import { $, fetchAPI } from "./utils.js";

(function () {
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
            else console.log(res.msg);
        } else {
            const msg = (Object.values(validation).find((e) => !e.confirm)).msg;
            alert(msg);
        }
    };

    const check = {
        id() {
            if (id.value) validation['id'].confirm = true;
            else validation['id'].confirm = false;
        },

        pw() {
            if (pw.value) validation['pw'].confirm = true;
            else validation['pw'].confirm = false;
        }
    };

    id.addEventListener("blur", check.id);
    pw.addEventListener("blur", check.pw);
    submitBtn.addEventListener("click", signIn);
})();