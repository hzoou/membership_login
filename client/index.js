// Ref https://poiemaweb.com/js-spa

import Main from "./src/views/Main.js";
import SignIn from "./src/views/SignIn.js";
import SignUp from "./src/views/SignUp.js";
import Error from "./src/views/Error.js";

const container = document.querySelector('.container');

function renderHtml(html, url) {
    container.innerHTML = html.render();
    const scripts = document.querySelectorAll('script');
    [].forEach.call(scripts, (e) => e.remove());
    if (url) {
        const script = document.createElement('script');
        script.type = 'module';
        script.src = `src/js/${url}.js`;
        document.body.appendChild(script);
    }
    // document.body.innerHTML += `<script src="../src/js/${url}.js" />`;
}

const routes = {
    '': () => {
        renderHtml(new Main(), 'main')
    },
    'signin': () => {
        renderHtml(new SignIn(), 'signin')
    },
    'signup': () => {
        renderHtml(new SignUp(), 'signup')
    },
    otherwise() {
        renderHtml(new Error(location.hash.replace('#', '')))
    }
};

function router() {
    const hash = location.hash.replace('#', '');
    (routes[hash] || routes.otherwise)();
}

window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', router);