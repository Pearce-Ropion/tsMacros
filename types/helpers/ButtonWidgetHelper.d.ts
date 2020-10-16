import * as Java from "../java";
import * as Minecraft from "../minecraft";

declare class ButtonWidgetHelper extends Java.JObject {
    constructor(btn: Minecraft.ButtonWidget);

    getActive(): boolean;
    getRaw(): Minecraft.ButtonWidget;
    getText(): string;
    getWidth(): number;
    getX(): number;
    getY(): number;
    setActive(t: boolean): ButtonWidgetHelper;
    setPos(x: number, y: number): ButtonWidgetHelper;
    setText(message: string): ButtonWidgetHelper;
    setWidth(width: number): ButtonWidgetHelper;
}

export default ButtonWidgetHelper;
