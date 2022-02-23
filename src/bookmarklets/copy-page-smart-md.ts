import { copyToClipboard } from '../shared/clipboard';


const title = document.title.replace(/[\|\[\(\]\)]/g, ' ').replace(/\s+/g, ' ').trim();
const url = document.location.href;

const header1 = document.querySelector("h1");
const header2 = document.querySelector("h2");

let paragraph = '';

var cssSelectors = [
    'h1 ~ p',
    'h1 ~ * p',
    'h2 ~ p',
    'h2 ~ * p',
];

for (const selector of cssSelectors) {
    let el = document.querySelector(selector);
    if (el && el.textContent && el.textContent.length > 10) {
        paragraph = el.textContent.replace(/\s+/g, ' ').trim().substring(0, 255);
        break;
    }
}

let now = new Date();
const offset = now.getTimezoneOffset()
now = new Date(now.getTime() - (offset*60*1000))
const dateStr = now.toISOString().split('T')[0];

const quoteMarkup = paragraph ? `  \n> ${paragraph}` : '';
copyToClipboard(`- ${dateStr} [${title}](${url})${quoteMarkup}\n`, 'Copy Page URL to Clipboard', document);
