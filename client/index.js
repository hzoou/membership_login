// Ref https://poiemaweb.com/js-spa

import Main from "./src/views/Main.js";
import SignIn from "./src/views/SignIn.js";
import SignUp from "./src/views/SignUp.js";
import Error from "./src/views/Error.js";

const container = document.querySelector('.container');

function renderHtml(page, url) {
    container.innerHTML = page.render();
    page.getScript();
}

const routes = {
    '': () => {
        if (getCookie('sessionId')) self.location.href = '/mypage';
        else renderHtml(new Main(), 'main');
    },
    'signin': () => {
        if (getCookie('sessionId')) self.location.href = '/mypage';
        else renderHtml(new SignIn(), 'signin');
    },
    'signup': () => {
        if (getCookie('sessionId')) self.location.href = '/mypage';
        else renderHtml(new SignUp(), 'signup');
    },
    otherwise() {
        renderHtml(new Error(location.hash.replace('#', '')))
    }
};

function router() {
    const hash = location.hash.replace('#', '');
    (routes[hash] || routes.otherwise)();
}

function getCookie(name) {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}

window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', router);