import { copyToClipboard } from '../shared/clipboard';


const title = document.title.replace(/[\[\(\]\)]/g, ' ');
const url = document.location.href;

copyToClipboard(`[${title}](${url})`, document);
