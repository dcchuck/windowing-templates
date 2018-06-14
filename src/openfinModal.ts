declare var fin: any;
declare var console: any;

interface Imodal {
    url: string;
    xBuffer?: number;
    yBUffer?: number;
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
}

export default class OpenFinModal {
    url: string;
    ready: boolean;
    ofWindow: IofWindow;
    parentWindow: IofWindow;
    ofWindowName: string;

    constructor(config: Imodal) {
        this.url = config.url;
        this.ready = false;
        this.ofWindowName = `OpenFinModal ${Math.random.toString()}`
        this.initLogic();
    }

    private async initLogic() {
        this.ofWindow = await fin.Window.create({
            url: this.url,
            name: this.ofWindowName,
            frame: false,
            opacity: 0.5
        })

        this.parentWindow = await fin.Window.getCurrent();
        this.ready = true;
    }

    public async show() {
        const parentWindowBounds = await this.parentWindow.getBounds();
        await this.ofWindow.resizeTo(parentWindowBounds.width, parentWindowBounds.height);
        await this.ofWindow.bringToFront();
        await this.ofWindow.showAt(parentWindowBounds.left, parentWindowBounds.top);
        await this.ofWindow.focus();
        await this.parentWindow.joinGroup(this.ofWindow);
    }
}
