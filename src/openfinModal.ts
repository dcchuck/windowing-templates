declare var fin: any;
declare var console: any;

interface Imodal {
    url: string;
    xBuffer?: number;
    yBuffer?: number;
    topOffset?: number;
    backgroundColor?: string;
}

interface IofWindow {
    getParentWindow();
    show();
    showAt: (x: number, y: number) => any;
    resizeTo: (x: number, y: number) => any;
    getBounds();
    bringToFront();
    focus();
    joinGroup: (w: IofWindow) => void;
    on: (event: string, cb: (e: any) => void) => Promise<any>;
    emit: (event: string) => Promise<any>;
    hide: () => Promise<any>;
}

//interface OpenFinModal extends EventEmitter

export default class OpenFinModal {
    url: string;
    ready: boolean;
    ofWindow: IofWindow;
    parentWindow: IofWindow;
    ofWindowName: string;
    xBuffer: number;
    yBuffer: number;
    topOffset: number;

    constructor(config: Imodal) {
        this.url = config.url;
        this.xBuffer = config.xBuffer || 0;
        this.yBuffer = config.yBuffer || 0;
        this.topOffset = config.topOffset || 0;
        this.ready = false;
        this.ofWindowName = `OpenFinModal ${Math.random().toString()}`
        this.initLogic();
    }

    private async initLogic() {
        this.ofWindow = await fin.Window.create({
            url: this.url,
            name: this.ofWindowName,
            frame: false,
            opacity: 0.75
        })

        this.ofWindow.on('close-requested', (e) => {
            console.log(e);
            console.log('close requested called!')
            console.log(this.ofWindow);
            this.ofWindow.hide().then(() => console.log(this.ofWindow));
            console.log('hidden!')
        })

        this.parentWindow = await fin.Window.getCurrent();
        this.ready = true;
    }

    public async show() {
        if (this.ready) {
            console.log('IN SHOW')
            console.log(this.ofWindow);
            const parentWindowBounds = await this.parentWindow.getBounds();
            await this.ofWindow.resizeTo(parentWindowBounds.width + this.xBuffer, parentWindowBounds.height + this.yBuffer);
            await this.ofWindow.bringToFront();
            await this.ofWindow.showAt((parentWindowBounds.left - (this.xBuffer / 2)), parentWindowBounds.top - this.topOffset);
            await this.ofWindow.focus();
            await this.parentWindow.joinGroup(this.ofWindow);
        }
    }
}
