fin.Window.getCurrent().then(thisWindow => {
    thisWindow.on('close-requested', () => {
        thisWindow.hide();
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