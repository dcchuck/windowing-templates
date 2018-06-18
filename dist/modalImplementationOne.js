"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var openFinModal_1 = require("./openFinModal");
var closeSpan = document.getElementById('close');
closeSpan.onclick = function () { return fin.desktop.Window.getCurrent().close(); };
var myModal1 = new openFinModal_1.default({
    url: 'modal-implementation-one-modal.html'
});
var showModalButton1 = document.getElementById('show-modal-1');
showModalButton1.onclick = function () {
    console.log('clicked!!');
    console.log(myModal1);
    myModal1.show();
    console.log(myModal1);
};
var myModal2 = new openFinModal_1.default({
    url: 'modal-implementation-one-modal.html',
    xBuffer: 100,
    yBuffer: 100
});
var showModalButton2 = document.getElementById('show-modal-2');
showModalButton2.onclick = function () { return myModal2.show(); };
var myModal3 = new openFinModal_1.default({
    url: 'modal-implementation-one-modal.html',
    xBuffer: 100,
    yBuffer: 100,
    topOffset: 100
});
var showModalButton3 = document.getElementById('show-modal-3');
showModalButton3.onclick = function () { return myModal3.show(); };
var myModal4 = new openFinModal_1.default({
    url: 'modal-implementation-one-modal.html',
    xBuffer: 30,
    yBuffer: -50,
    topOffset: -10
});
var showModalButton4 = document.getElementById('show-modal-4');
showModalButton4.onclick = function () { return myModal4.show(); };
