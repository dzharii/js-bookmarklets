export function copyToClipboard(content: string, buttonTitle: string, D: Document): void {
    if (!D) {
        return;
    }
    const B = D.body;

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
            navigator.clipboard.writeText(content).then(function() {
                console.log('Content copied to clipboard');
              }, function() {
                console.log('Failed to copy content to clipboard');
              });
            B.removeChild(btn);
        }
    }
    showCopyButton();
}