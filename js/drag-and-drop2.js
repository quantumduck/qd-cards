function makeDraggableWithCopy(element, zIndex, dropZone) {
    
}


function syncElementToMouse(element, mouseMoveEvent, offset = {x: 0, y: 0}) {
    element.style.left = mouseMoveEvent.pageX - offset.x + 'px';
    element.style.top = mouseMoveEvent.pageY - offset.y + 'px';
}

function getMouseOffset(element, mouseEvent) {
    const elementBox = element.getBoundingClientRect();
    return {
        x: mouseEvent.clientX - elementBox.left,
        y: mouseEvent.clientY - elementBox.top
    };
}

function makeDraggable(element, selectElementEvent, zIndex = 1) {
    const mouseOffset = getMouseOffset(element, selectElementEvent);
    const onMouseMove = e => syncElementToMouse(element, event, mouseOffset);
    console.log("click");
    element.style.position = 'absolute';
    element.style.zIndex = zIndex;
    onMouseMove(selectElementEvent);
    document.addEventListener('mousemove', onMouseMove);
    element.ondragstart = () => false;
    element.onmouseup = () => {
        document.removeEventListener('mousemove', onMouseMove);
        element.onmouseup = null;
    }
    document.body.append(element);
}


