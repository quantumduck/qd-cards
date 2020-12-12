document.addEventListener('DOMContentLoaded', () => {

    
    const emojis = createEmojis(0x1F600, 63);
    const container = document.createElement('div');
    container.className = "open-box";
    
    for (let e of emojis) {
        container.appendChild(e);
        e.onmousedown = ev => makeDraggableWithCopy(e, ev, 1000);
    }
    document.body.append(container);
    twemoji.parse(document.body, {ext: ".svg", size: "svg"});
    

/*   
    const e2 = document.createElement('div');
    let emojiCodePoint = 0x1F4E6;
    const e2OnClick = () => {
        console.log(emojiCodePoint.toString(16));
        e2.textContent = String.fromCodePoint(emojiCodePoint++);
        twemoji.parse(e2, {ext: ".svg", size: "svg"});
    }

    e2.style.width = '50px';
    e2.style.height = '50px';
    e2.onclick = e2OnClick;
    e2OnClick();
    document.body.appendChild(e2);
 */   
    
    /*
        Emoticons: Smilies: 1F600-1F641
        Simple Symbols: 2600-26FF
        Weather: 1F300-1F32C NO 1F322,1F232
        Food: 1F32D-1F37F, 1F950-1F96F 
        Recreation: 1F380-1F3DF, NO 1F394, 1F395
    
    */
});

