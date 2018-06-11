const showModalButton = document.getElementById('show-modal');

showModalButton.onclick = () => showModal()

let modalWindow;
let thisWindow;

async function showModal() {
    if (!modalWindow) {
        modalWindow = await fin.Window.create({
            name: 'modal-implementation-one-child',
            url: 'modal-implementation-one-child.html'
        });
    }

    thisWindow = await fin.Window.getCurrent();
    console.log(thisWindow)
    thisWindowBounds = await thisWindow.getBounds();
    console.log(thisWindowBounds)
    console.log(modalWindow);
    modalWindow.showAt(thisWindowBounds.left, thisWindowBounds.top);
}

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