
let thisWindow;

const hideButton = document.getElementById('hide');

hideButton.onclick = () => {
    if (!thisWindow) {
        fin.Window.getCurrent().then(thisOfWindow => {
            thisWindow = thisOfWindow;
            thisOfWindow.hide();
        })
    } else {
        thisWindow.hide();
    }


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