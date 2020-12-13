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

function createSimpleContainer(emojis) {
    const container = document.createElement('div');
    container.className = 'open-box';
    container.style.display = 'none';
    container.onclick = ev => ev.stopPropagation();
    
    const show = ev => {
        ev.stopPropagation();
        container.style.display = 'block'; 
    };
    const hide = ev => {
        ev.stopPropagation();
        container.style.display = 'none';
    };
    const toggle = ev => {
        container.style.display === 'none' ? show(ev) : hide(ev);
    }
    
    for (let e of emojis) {
        container.appendChild(e);
        e.onmousedown = ev => makeDraggableWithCopy(e, ev, 1000);
        e.onclick = ev => ev.stopPropagation();
    }

    document.body.append(container);
    return { show, hide, toggle };
}

