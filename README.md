# Windowing Templates

This project contains sample code for implementing certain window functionality on OpenFin.

## Templates

### Modal

Create your modal in the window you want to cover up. The url is for the same-origin html document that represents the modal.
```js
const myModal = new OpenFinModal({
    url: 'your-modal.html'
});
```

In the event that would dismiss your modal, add a `.hide()` call in the window object. This would go in the `your-modal.html` javascript.
```js
// API V2
fin.Window.getCurrent().then(thisOfWindow => {
    thisOfWindow.hide();
});
// API V1
fin.desktop.Window.getCurrent().hide();
```

* Top Bar
* Context Menu
* System Tray Menu
