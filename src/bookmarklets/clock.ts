const container = document.createElement('div');
const intlOptions = {
    hour: '2-digit',
    minute: '2-digit',
};
container.setAttribute('style', `
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 2147483647;
    color: green;
    background: black;
    font-family: Arial, Verdana;
    font-size: 14pt;

`);

document.body.appendChild(container);
setInterval(updateClock, 1000);

function updateClock() {
    container.textContent = '🕒 ' + Intl.DateTimeFormat('en-GB', intlOptions).format(new Date());
}