const URL = 'http://localhost:3000';

const $ = (selectors) => {
    if (selectors.indexOf('#') != -1) return document.querySelector(selectors);
    else return document.querySelectorAll(selectors);
};

const fetchAPI = (uri, method, body) => {
    return fetch(URL + uri, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    }).then((res) => {
        if (res.ok) return res.json();
        throw new Error('Network response was not ok.');
    }).then((data) => {
        return data;
    }).catch((err) => {
        return alert(err.message);
    });
};

export { $, fetchAPI };