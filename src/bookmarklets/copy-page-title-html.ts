import { copyToClipboard } from '../shared/clipboard';


const title = document.title.replace(/[\|\[\(\]\)]/g, ' ').replace(/\s+/g, ' ').trim();
const url = document.location.href;

copyToClipboard(`<li>\n\t<a href="${encodeURI(url)}">\n\t\t${title}\n\t</a>\n</li>`, 'Copy Page URL HTML to Clipboard', document);
