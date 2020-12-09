document.addEventListener('DOMContentLoaded', () => {
    ball.onmousedown = e => makeDraggable(ball, e, 1000);
    const emojiDiv = document.createElement('div');
    emojiDiv.textContent = String.fromCodePoint(0x1F332);
    emojiDiv.style.maxWidth = '1080px';
    document.body.append(emojiDiv);
    twemoji.parse(document.body, {ext: ".svg", size: "svg"});
    
    
    /*
        Emoticons: Smilies: 1F600-1F641
        Simple Symbols: 2600-26FF
        Weather: 1F300-1F32C
        Food: 1F32D-1F37F, 1F950-1F96F
        Recreation: 1F380-1F3DF, 
    
    */
});

