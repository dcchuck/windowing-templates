"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var openFinModal_1 = require("./openFinModal");
var myModal = new openFinModal_1.default({
    url: 'modal-implementation-one-modal.html'
});
var closeSpan = document.getElementById('close');
closeSpan.onclick = function () { return fin.desktop.Window.getCurrent().close(); };
var showModalButton = document.getElementById('show-modal');
showModalButton.onclick = function () { return myModal.show(); };
