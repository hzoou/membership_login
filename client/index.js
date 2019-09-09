// Ref https://poiemaweb.com/js-spa
// Ref https://stackoverflow.com/questions/2144386/how-to-delete-a-cookie
import Main from "./src/views/Main.js";
import SignIn from "./src/views/SignIn.js";
import SignUp from "./src/views/SignUp.js";
import Error from "./src/views/Error.js";

const container = document.querySelector('.container');

const renderHtml = (page) => {
    container.innerHTML = page.render();
    page.getScript();
};

const checkSession = async () => {
    const check = await fetch('/session', {
                            method: 'GET',
                            headers: {'Content-Type': 'application/json'},
                        }).then((res) => {
                            if (res.ok) return res.json();
                            throw new Error('Network response was not ok.');
                        }).then((data) => {
                            return data;
                        }).catch((err) => {
                            return alert(err.message);
                        });
    return check.status;
};

const routes = {
    '': () => {
        if (checkSession() === "SUCCESS") self.location.href = '/mypage';
        else { deleteCookie('sessionId'); renderHtml(new Main()); }
    },
    'signin': () => {
        if (checkSession() === "SUCCESS") self.location.href = '/mypage';
        else { deleteCookie('sessionId'); renderHtml(new SignIn()); }
    },
    'signup': () => {
        if (checkSession() === "SUCCESS") self.location.href = '/mypage';
        else { deleteCookie('sessionId'); renderHtml(new SignUp()); }
    },
    otherwise() {
        renderHtml(new Error(location.hash.replace('#', '')))
    }
};

const router = () => {
    const hash = location.hash.replace('#', '');
    (routes[hash] || routes.otherwise)();
};

const deleteCookie = (name) => {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};

window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', router);