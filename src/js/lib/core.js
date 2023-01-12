(() => {
    const $ = function (selector) { //заменили document.querySelectorAll на $
        const elements = document.querySelectorAll(selector);
        console.log(elements);
    }

    window.$ = $; //записываем функцию глобально
})();