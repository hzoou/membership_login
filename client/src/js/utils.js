const $ = (selectors) => {
    if (selectors.indexOf('#') != -1) return document.querySelector(selectors);
    else return document.querySelectorAll(selectors);
};

const fetchAPI = (uri, method, body) => {
    return fetch(uri, {
        method: method,
        headers: {'Content-Type': 'application/json'},
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
    const closeBtn = $('.closeBtn');
    [].forEach.call(closeBtn, (el) => {
        el.addEventListener("click", () => {
            document.body.style.overflow = 'auto';
            const parentNode = el.parentNode;
            const grandNode = el.parentNode.parentNode;
            if (parentNode.className != 'agreement') parentNode.remove();
            grandNode.style.display = "none";
        });
    })
};

export {$, fetchAPI, makeModal, closeModal};