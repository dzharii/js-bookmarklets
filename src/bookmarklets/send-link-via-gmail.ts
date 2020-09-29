
function makeGmailUrl(to:string, subject: string, body: string) {
    const EUC = encodeURIComponent;
    return `https://mail.google.com/mail/?view=cm&fs=1&` +
           `to=${EUC(to)}&su=${EUC(subject)}&body=${EUC(body)}`;
}


const title = document.title;
const url = document.location.href;

const htmlLink = document.createElement('a');
htmlLink.href = makeGmailUrl('d'+'@'+'zharii'+'.com','LINK: ' + title, title + '\n' + url);
htmlLink.target = '_blank';
document.body.appendChild(htmlLink);
htmlLink.click();
document.body.removeChild(htmlLink);

