const $ = (selectors) => {
    if (selectors.indexOf('#') != -1) return document.querySelector(selectors);
    else return document.querySelectorAll(selectors);
};

export { $ };