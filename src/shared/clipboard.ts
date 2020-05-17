export function copyToClipboard(content: string, doc: Document): boolean {
    if (!doc) {
        return false;
    }

    const main = doc.createElement('div');
    const txt = doc.createElement('textarea');
    const btnCopy = doc.createElement('input');
    const btnCancel = doc.createElement('input');

    main.appendChild(txt);
    main.appendChild(btnCopy);
    main.appendChild(btnCancel);

    main.setAttribute('style', [
        'width:100%',
        'border:1px solid silver',
        'padding:5px',
        'position:absolute',
        'background:black',
        'z-index:9999'
    ].join(';'));

    txt.value = content;
    txt.setAttribute('rows', '1');
    txt.setAttribute('style', [
        'width:50%',
        'overflow:hidden',
        'resize:none',
        'float:left'
    ].join(';'));

    btnCopy.type = 'button';
    btnCopy.value = 'Copy';
    btnCopy.onclick = function() {
        txt.select();
        txt.setSelectionRange(0, 99999);
        doc.execCommand("copy");
        doc.body.removeChild(main);
    };

    btnCancel.type = 'button';
    btnCancel.value = 'Cancel';
    btnCancel.onclick = function() {
        doc.body.removeChild(main);
    };

    const first = doc.body.firstChild;
    doc.body.insertBefore(main, first);
    main.scrollIntoView();
    return true;
}
