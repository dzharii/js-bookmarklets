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
    color: silver;
    letter-spacing: 3px;
    background: black;
    font-family: Arial, Verdana;
    font-size: 16pt;
    padding-right: 10px;
    font-weight: bold;

`);

document.body.appendChild(container);
updateClock();
setInterval(updateClock, 1000);

function updateClock() {
    container.textContent = '🕒 ' + Intl.DateTimeFormat('en-GB', intlOptions).format(new Date());
}