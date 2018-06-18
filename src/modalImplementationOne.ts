declare var fin: any;
import OpenFinModal from './openFinModal';

const closeSpan = document.getElementById('close');

closeSpan.onclick = () => fin.desktop.Window.getCurrent().close();

const myModal1 = new OpenFinModal({
    url: 'modal-implementation-one-modal.html'
})

const showModalButton1 = document.getElementById('show-modal-1');

showModalButton1.onclick = () => {
    console.log('clicked!!')
    console.log(myModal1)
    myModal1.show()
    console.log(myModal1)
};

const myModal2 = new OpenFinModal({
    url: 'modal-implementation-one-modal.html',
    xBuffer: 100,
    yBuffer: 100
});
const showModalButton2 = document.getElementById('show-modal-2');

showModalButton2.onclick = () => myModal2.show();

const myModal3 = new OpenFinModal({
    url: 'modal-implementation-one-modal.html',
    xBuffer: 100,
    yBuffer: 100,
    topOffset: 100
});
const showModalButton3 = document.getElementById('show-modal-3');

showModalButton3.onclick = () => myModal3.show();

const myModal4 = new OpenFinModal({
    url: 'modal-implementation-one-modal.html',
    xBuffer: 30,
    yBuffer: -50,
    topOffset: -10
});
const showModalButton4 = document.getElementById('show-modal-4');

showModalButton4.onclick = () => myModal4.show();