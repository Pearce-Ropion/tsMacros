import Draw2D from "../classes/Draw2D";
import Draw3D from "../classes/Draw3D";
import Functions from "../extensionBase/Functions";
import IDraw2D from "../sharedInterfaces/IDraw2D";
import IScreen from "../sharedInterfaces/IScreen";

declare class FHud extends Functions {
    constructor(libName: string);
    constructor(libName: string, excludeLanguages: string[]);

    renders: Draw3D[];
    overlays: IDraw2D<Draw2D>[];

    clearDraw2Ds(): void;
    clearDraw3Ds(): void;
    createDraw2D(): IDraw2D<Draw2D>;
    createDraw3D(): Draw3D;
    createScreen(title: string, dirtBG: boolean): IScreen;
    getMouseX(): number;
    getMouseY(): number;
    getOpenScreen(): IScreen;
    getOpenScreenName(): string;
    isContainer(): boolean;
    listDraw2Ds(): IDraw2D<Draw2D>[];
    listDraw3Ds(): Draw3D[];

    /**
     * Open a IScreen object
     */
    openScreen(s: IScreen): void;
    registerDraw2D(overlay: IDraw2D<Draw2D>): void;
    registerDraw3D(draw: Draw3D): void;
    unregisterDraw2D(overlay: Draw2D): void;
    unregisterDraw3D(draw: Draw3D): void;
}

export default FHud;
