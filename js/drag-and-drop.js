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

function createDocumentListenerManager(listenerType) {
    let listeners = [];

    function add(listener) {
        document.addEventListener(listenerType, listener);
        listeners.push(listener);
    }
    
    function clear() {
        listeners.forEach(l => {
            document.removeEventListener(listenerType, l);
        });
        listeners = [];
    }
    
    return { add, clear };
}

const mouseMoveListeners = createDocumentListenerManager("mousemove");

function makeDraggable(element, cursorEvent, zIndex = 1) {
    const mouseOffset = getMouseOffset(element, cursorEvent);
    const onMouseMove = e => syncElementToMouse(element, event, mouseOffset);

    element.ondragstart = () => false;
    element.style.position = 'absolute';
    element.style.zIndex = zIndex;
    onMouseMove(cursorEvent);
    mouseMoveListeners.add(onMouseMove);
    element.onmouseup = () => {
        mouseMoveListeners.clear();
        element.onmouseup = null;
    }
    document.body.append(element);
}


