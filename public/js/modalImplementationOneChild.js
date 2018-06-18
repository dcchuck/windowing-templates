
let thisWindow;

const hideButton = document.getElementById('hide');
const emitButton = document.getElementById('emit');

hideButton.onclick = () => {
    if (!thisWindow) {
        fin.Window.getCurrent().then(thisOfWindow => {
            thisWindow = thisOfWindow;
            // thisOfWindow.emit('hide-modal', () => thisOfWindow.hide();) 
            thisOfWindow.close();
        })
    } else {
        thisWindow.hide();
    }
}

emitButton.onclick = () => {
    if (!thisWindow) {
        fin.Window.getCurrent().then(thisOfWindow => {
            thisWindow = thisOfWindow;
            // thisOfWindow.emit('hide-modal', () => thisOfWindow.hide();) 
            thisWindow.emit('hide-modal');
        })
    } else {
        thisWindow.emit('hide-modal');
    }
}

const secondWin = new fin.desktop.Window({
    name: 'secondWin',
    url: 'modal-implementation-one-child.html',
    autoShow: true
}, () => {
    secondWin.addEventListener('close-requested', () => {
        console.log('why you close me!')
        secondWin.hide();
    })
})



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