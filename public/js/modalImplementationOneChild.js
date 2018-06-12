// let thisWindow;
// let parentWindow;
// let initialized = false;

fin.Window.getCurrent().then(thisWindow => {
    thisWindow.on('close-requested', () => {
        thisWindow.hide();
    })
})

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