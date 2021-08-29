import { copyToClipboard } from '../shared/clipboard';


const title = document.title.replace(/[\|\[\(\]\)]/g, ' ');
const url = document.location.href;

let now = new Date();
const offset = now.getTimezoneOffset()
now = new Date(now.getTime() - (offset*60*1000))
const dateStr = now.toISOString().split('T')[0];


copyToClipboard(`- (${dateStr}) [${title}](${url})`, 'Copy Page URL to Clipboard', document);
