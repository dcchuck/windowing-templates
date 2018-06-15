declare var fin: any;
import OpenFinModal from './openFinModal';

const myModal = new OpenFinModal({
    url: 'modal-implementation-one-modal.html'
});

const closeSpan = document.getElementById('close');

closeSpan.onclick = () => fin.desktop.Window.getCurrent().close();

const showModalButton = document.getElementById('show-modal');

showModalButton.onclick = () => myModal.show();
