import { copyToClipboard } from '../shared/clipboard';


copyToClipboard(`${document.title}\n${document.location.href}`, 'Copy Page URL to Clipboard', document);
