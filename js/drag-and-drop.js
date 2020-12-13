function syncElementToMouse(element, mouseMoveEvent, offset = {x: 0, y: 0}) {
    mouseMoveEvent.stopPropagation();
    mouseMoveEvent.preventDefault();
    element.style.left = mouseMoveEvent.pageX - offset.x + 'px';
    element.style.top = mouseMoveEvent.pageY - offset.y + 'px';
}

function getMouseOffset(element, mouseEvent) {
    const elementBox = element.getBoundingClientRect();
    return {
        x: mouseEvent.pageX - elementBox.left,
        y: mouseEvent.pageY - elementBox.top
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


// TODO make a change constructor to do less redundnat work
function makeDraggable(element, cursorEvent, zIndex = 1, mouseOffset) {
    mouseOffset = mouseOffset || getMouseOffset(element, cursorEvent);
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


function makeDraggableWithCopy(element, cursorEvent, zIndex = 1) {
    const initialPosition = element.getBoundingClientRect();
    const copy = element.cloneNode(true);
    copy.onmousedown = ev => makeDraggableWithCopy(copy, ev, zIndex);    
    element.parentNode.replaceChild(copy, element);
    
    element.style.position = 'absolute';
    element.style.zIndex = zIndex;
    element.style.top = initialPosition.top + 'px';
    element.style.left = initialPosition.left + 'px';
    element.style.margin = 0;
    element.onmousedown = ev => makeDraggable(element, ev, zIndex);
    document.body.append(element);
    
    makeDraggable(element, cursorEvent, zIndex);
}


