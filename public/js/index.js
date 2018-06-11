const moodalImplementationOneButton = document.getElementById('modal-implementation-one');

moodalImplementationOneButton.onclick = () => showModalImplementationOne()

async function showModalImplementationOne() {
    const modelImplementationOneWindow = await fin.Window.create({
        name: 'modal-implementation-one',
        url: 'modal-implementation-one.html',
        autoShow: true,
        defaultWidth: 300,
        defaultHeight: 300,
        saveWindowState: false
    });
}