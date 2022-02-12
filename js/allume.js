// select the element to handle
const ol = document.querySelector('ol');

setInterval(
    () => {
        ol.classList.toggle('allume');
    },
    1500
);
