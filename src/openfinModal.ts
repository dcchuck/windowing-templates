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
            name: this.ofWindowName
        })

        this.parentWindow = await this.ofWindow.getParentWindow();
        this.ready = true;
    }
}
