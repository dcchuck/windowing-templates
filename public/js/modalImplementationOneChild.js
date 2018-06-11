fin.Window.getCurrent().then(thisWindow => {
    thisWindow.on('close-requested', () => {
        thisWindow.hide();
    })
})