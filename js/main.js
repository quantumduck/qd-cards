document.addEventListener('DOMContentLoaded', () => {

    
    const emoticons = createEmojis(0x1F600, 63);
    const holiday = createEmojis(0x1F380, 20);
    const food = createEmojis(0x1F32D, 63);
    const animals = createEmojis(0x1F400, 63);
    const weather1 = createEmojis(0x1F300, 34);
    const weather2 = createEmojis(0x1F324, 9);
    const containers = [
        createSimpleContainer(emoticons),
        createSimpleContainer([...holiday, ...weather1, ...weather2]),
        createSimpleContainer(food),
        createSimpleContainer(animals),
    ];
    
    twemoji.parse(document.body, {ext: ".svg", size: "svg"});
    document.body.onclick = ev => {
        for (let c of containers) {
            c.hide(ev);
        }
    };
    const triggerHandler = (ev, triggerIndex) => {
        for (let i = 0; i < containers.length; i++) {
            i === triggerIndex
                ? containers[i].toggle(ev)
                : containers[i].hide(ev);
        }
    }
    box1.onclick = ev => { triggerHandler(ev, 0); };
    box2.onclick = ev => { triggerHandler(ev, 1); };
    box3.onclick = ev => { triggerHandler(ev, 2); };
    box4.onclick = ev => { triggerHandler(ev, 3); };

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

