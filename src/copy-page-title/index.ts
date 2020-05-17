import { copyToClipboard } from '../shared/clipboard';


copyToClipboard(`${document.title}\n${document.location.href}`, document);
