export function copyToClipboard(content: string, buttonTitle: string, D: Document): void {
    if (!D) {
        return;
    }
    const B = D.body;
    function copyClip() {
        const txt = D.createElement('textarea');
        txt.setAttribute('style', 'width: 0px; height:0px');
        B.appendChild(txt);
        txt.value = content;

        setTimeout(() => {
            txt.select();
            txt.setSelectionRange(0, 99999);
            D.execCommand("copy");
            B.removeChild(txt);
        }, 1)
    }

    function showCopyButton() {
        const btn = D.createElement('button');
        btn.setAttribute('style', [
            'position: fixed',
            'top: 0px',
            'left: 0px',
            'z-index: 99999',
            'background: lightgreen',
            'border: 2px solid black',
            'border: color: black',
            'letter-spacing: normal',
            'word-spacing: normal',
            'text-transform: none',
            'text-indent: 0px',
            'text-shadow: none',
            'display: inline-block',
            'text-align: center',
            'cursor: default',
            'box-sizing: border-box',
            'margin: 0em',
            'font: 400 20pt Arial',
        ].join(';'));
        btn.textContent = buttonTitle;
        B.appendChild(btn);
        btn.onclick = () => {
            copyClip();
            B.removeChild(btn);
        }
    }

    showCopyButton();
}