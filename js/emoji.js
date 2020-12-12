const EMOTICON_START = 0x1F600;
const EMOTICON_COUNT = 5 * 16;

function createEmojis(startAtCode, count) {
    const emojis = [];
    for (let i = 0; i < count; i++) {
        const container = document.createElement('div');
        container.className = "emoji-box";
        container.textContent = String.fromCodePoint(startAtCode + i);
        emojis.push(container);
    }
    return emojis;
}

