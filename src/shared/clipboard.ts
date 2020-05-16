export function copyToClipboard(content: string, doc: Document): boolean {
    if (!doc) {
        return false;
    }

    const txt = doc.createElement("input");
    txt.value = content;
    txt.select();
    txt.setSelectionRange(0, 99999);
    doc.execCommand("copy");
    return true;
}