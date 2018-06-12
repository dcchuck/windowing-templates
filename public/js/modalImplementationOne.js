const closeSpan = document.getElementById('close');

closeSpan.onclick = () => fin.desktop.Window.getCurrent().close();

const showModalButton = document.getElementById('show-modal');

showModalButton.onclick = () => showModal()

let modalWindow;
let thisWindow;

async function showModal() {
    if (!modalWindow) {
        modalWindow = await fin.Window.create({
            name: 'modal-implementation-one-child',
            url: 'modal-implementation-one-child.html',
            autoShow: false
        });
    }

    thisWindow = await fin.Window.getCurrent();
    const thisWindowBounds = await thisWindow.getBounds();
    modalWindow.resizeTo(thisWindowBounds.width, thisWindowBounds.height).then(() => {
        modalWindow.showAt(thisWindowBounds.left, thisWindowBounds.top);
    });
}


// let thisWindow;
// let parentWindow;
// let initialized = false;

// async function initializeWindow() {
//     thisWindow = await fin.Window.getCurrent();
//     parentWindow = await thisWindow.getParentWindow();
//     initialized = true;
// }

// if (!initialized) {
//     initializeWindow().then(() => showWindow());
// } else {
//     showWindow();
// }

// async function showWindow() {
//     const parentBounds = await parentWindow.getBounds();
//     const thisWindowBounds = await thisWindow.getBounds();
//     const x = (parentBounds.left + (parentBounds.width / 2)) - (thisWindowBounds.width / 2);
//     const y = parentBounds.top + 10;
//     thisWindow.showAt(x, y);
// }


/*
bottom
:
737
height
:
500
left
:
16
right
:
816
top
:
237
width
:
800
*/