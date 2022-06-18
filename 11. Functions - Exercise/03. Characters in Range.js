function charactersInRange(firstChar, secondChar) {
    let startChar = Math.min(firstChar.charCodeAt(0), secondChar.charCodeAt(0));
    let endChar = Math.max(firstChar.charCodeAt(0), secondChar.charCodeAt(0));
    let result = [];
    for (let current = startChar + 1; current < endChar; current++) {
        result.push(String.fromCharCode(current));
    }
    return result.join(' ');
}
charactersInRange('a', 'd')